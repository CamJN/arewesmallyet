require_relative "../lib/domainredirect.rb"
require 'rack-mini-profiler'

class Arewesmallyet < Padrino::Application
  register Padrino::Rendering
  register Padrino::Pipeline
  register Padrino::Helpers
  register Padrino::Cache

  use Rack::DomainRedirect, ["arewesmallyet.dev", "localhost"]

  disable :caching
  disable :sessions
  disable :flash
  set :haml, :format => :html5

  get :index do
    render :index
  end

  get :data, provides: :json do
    # Record.order(:day).map do |r|
    #   {r.day.to_s => JSON.parse!(r.data)}
    # end.reduce({}, :merge!).to_json

    Sequel::Model.db.fetch("select format('{%s}', string_agg(format('%s:%s',to_json(day),data) ,',') )::json as jsobj from records;").first[:jsobj]
  end

  get "/*", :priority => :low do
    redirect "/"
  end

  configure_assets do |config|
    config.pipeline = Padrino::Pipeline::Sprockets
    config.prefix = '/public'
  end

  configure :production do
    enable :caching
    expires 3600 * 12
    # You can customize caching store engines:
    #
    #   set :cache, Padrino::Cache::Store::Memcache.new(::Memcached.new('127.0.0.1:11211', :exception_retry_limit => 1))
    #   set :cache, Padrino::Cache::Store::Memcache.new(::Dalli::Client.new('127.0.0.1:11211', :exception_retry_limit => 1))
    #   set :cache, Padrino::Cache::Store::Redis.new(::Redis.new(:host => '127.0.0.1', :port => 6379, :db => 0))
    #   set :cache, Padrino::Cache::Store::Memory.new(50)
    #   set :cache, Padrino::Cache::Store::File.new(Padrino.root('tmp', app_name.to_s, 'cache')) # default choice
    set :cache, Padrino::Cache::Store::Memcache.new(::Dalli::Client.new(:exception_retry_limit => 1))
  end

  configure :development do
    use Rack::MiniProfiler
    disable :asset_stamp # no asset timestamping for dev
  end

  ##
  # You can manage errors like:
  #
  #   error 404 do
  #     render 'errors/404'
  #   end
  #
  #   error 505 do
  #     render 'errors/505'
  #   end
  #
end
