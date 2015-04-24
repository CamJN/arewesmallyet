require 'date'
require 'json'
require 'net/ftp'
require 'active_support/all'
require 'open-uri'
require 'open_uri_redirections'
require 'nokogiri'

class Updater
  @@root = "/pub/mozilla.org/firefox/nightly"

  @@names = {
    linux: ['*.linux-i686.tar.bz2'],
    linux64: ['*.linux-x86_64.tar.bz2'],
    win: ['*.win32.zip', '*.win32.installer.exe'],
    win64: ['*.win64-x86_64.installer.exe','*.win64.zip','*.win64.installer.exe'],
    mac: ['*.mac64.dmg', '*.mac.dmg']
  }

  def run
    date = Date.today

    Net::FTP.open("ftp.mozilla.org") do |ftp|
      ftp.passive = true
      ftp.login

      5.times do
        ftp.chdir date.strftime("#{@@root}/%Y/%m/")
        pattern = date.strftime("%Y-%m-%d-*-mozilla-central")

        res = ftp.list(pattern).first
        if res
          ftp.chdir("#{ftp.pwd}/#{res.split.last}")
          self.fetch_current_day(ftp, date)
        end

        date = date.prev_day
      end

      ftp.close
    end
  end

  def fetch_current_day(ftp, date)
    sizes = {}
    @@names.each do |system, extensions|
      extensions.each do |ext|
        file = ftp.list(ext).first
        next unless file

        size = ftp.size(file.split.last)
        sizes[system] = size
      end
    end

    rec = Record.first(day: date)
    rec = Record.new(day: date) unless rec

    rec.data = sizes.to_json
    rec.save
  end
end

def run_updater
  puts "[Updater] starting..."

  begin
    Updater.new.run
    update = Update.new(finished: DateTime.now)
    update.save rescue false
    Arewesmallyet.cache.clear
  rescue
    puts "[Updater] ERROR: #{$!}"
  end

  puts "[Updater] finished!"
end

task :update_once => [:environment] do
  run_updater
  check_versions
end

def check_versions
  page_url = 'https://www.mozilla.org/en-US/firefox/releases/'
  contents = Nokogiri::HTML(open(page_url)).css('#main-content > ol > li > strong > a').map{|e| {text:e.text,href:e['href']} }.map do |v|
    {date_str: Nokogiri::HTML(open(URI.join(page_url,v[:href]).to_s,allow_redirections: :all))
                .css('header.notes-head > h2, #main-feature > h2 > small, #main-feature > p > em').text
                .split(/ (released|users) (on )?/).last,
       version: v[:text]}
  end.select{|e| !e[:date_str].nil? }.map do |e|
    [Date.parse(e[:date_str]).to_s, e[:version].sub(/\.0$/,'')]
  end.reverse.to_s.prepend('var releaseDates = ').concat(';')
  File.open('app/assets/javascripts/releases.js', 'w') { |file| file.write(contents) }
end
