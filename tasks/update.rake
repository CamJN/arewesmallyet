require 'date'
require 'json'
require 'net/http'
require 'uri'
require 'active_support/all'
require 'open-uri'
require 'open_uri_redirections'
require 'nokogiri'

class Updater

  @@names = {
    linux: [/.*\.linux-i686\.tar\.bz2\z/],
    linux64: [/.*\.linux-x86_64\.tar\.bz2\z/],
    win: [/.*\.win32\.zip\z/, /.*\.win32\.installer\.exe\z/],
    win64: [/.*\.win64-x86_64\.installer\.exe/,/.*\.win64-x86_64\.zip/,/.*\.win64\.zip/,/.*\.win64\.installer\.exe/],
    mac: [/.*\.mac64\.dmg/, /.*\.mac\.dmg/]
  }

  @@dates = [
    Date.new(2013,12,29),
    Date.new(2014,1,1)
  ]

  def self.dates=(dates)
    @@dates = dates
  end

  def run
    @@dates = (4.days.ago.to_date .. Date.today).to_a if @@dates.nil?

    @@dates.each_with_index do |date,i|
      date_url = URI("https://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/#{date.strftime('%Y')}/#{date.strftime('%m')}/")
      links = Nokogiri::HTML(open(date_url.to_s)).css('a').select{|e|
        e.text.strip =~ Regexp.new(date.strftime("\\A%Y-%m-%d-.+-mozilla-central/\\z"))
      }.map do |l|
        fetch_current_day(date_url, l, date)
      end
      record_day(date,links)
      puts "#{100*(i+1)/@@dates.length}% done\n"
    end
  end

  def get_size(uri)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true if uri.scheme == 'https'
    file_size = http.request_head(uri.path)['content-length']

    file_size.to_i
  end

  def fetch_current_day(date_url, l, date)
    day_url = URI.join(date_url.to_s,l['href'])
    reduced = Nokogiri::HTML(open(day_url)).css('a').reduce({}) do |sizes,e|
      @@names.each do |os, suffixes|
        suffixes.each do |sfx|
          sizes[os] = get_size(URI.join(day_url, e['href'])) if e.text.strip =~ sfx
        end
      end
      sizes
    end
  end

  def record_day(date,data)
    rec = Record.first(day: date)
    rec = Record.new(day: date) unless rec
    sizes = {}.merge(data.pop)
    data.each { |d| sizes.merge!(d) }
    rec.data = sizes.to_json
    rec.save
  end
end

def run_updater(backfilling=false)
  puts "[Updater] starting..."

  begin
    Updater.dates = nil unless backfilling
    updater = Updater.new.run
    update = Update.new(finished: DateTime.now)
    update.save rescue false
    Arewesmallyet.cache.clear
  rescue
    puts "[Updater] ERROR: #{$@}: #{$!}"
  end

  puts "[Updater] finished!"
end

task :update_once => [:environment] do
  run_updater
  check_versions
end

task :backfill => [:environment] do
  run_updater true
end

def check_versions
  page_url = 'https://www.mozilla.org/en-US/firefox/releases/'
  contents = Nokogiri::HTML(open(page_url)).css('#main-content > ol > li > strong > a').map{|e| {text:e.text,href:e['href']} }.map do |v|
    {date_str: Nokogiri::HTML(open(URI.join(page_url,v[:href]).to_s,allow_redirections: :all))
       .css('header.notes-head > h2, #main-feature > h2 > small, #main-feature > p > em, .version > p:nth-child(3)').text
       .split(/ (released|users) (on )?/).last,
     version: v[:text]}
  end.select{|e| !e[:date_str].nil? }.map do |e|
    [Date.parse(e[:date_str]).to_s, e[:version].sub(/\.0$/,'')]
  end.reverse.to_s.prepend('var releaseDates = ').concat(';')
  File.open('app/assets/javascripts/releases.js', 'w') { |file| file.write(contents) }
end
