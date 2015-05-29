require_relative "../lib/domainredirect.rb"
require 'rack-mini-profiler'

class Arewesmallyet < Padrino::Application
  register Padrino::Rendering
  register Padrino::Pipeline
  register Padrino::Helpers
  register Padrino::Cache

  configure :development do
      use Rack::DomainRedirect, ["arewesmallyet.dev", "localhost"]
      use Rack::MiniProfiler
      disable :asset_stamp
      disable :caching
    end

  disable :sessions
  disable :flash
  set :haml, format: :html5

  configure_assets do |config|
    config.pipeline = Padrino::Pipeline::Sprockets
    config.prefix = '/public'
    config.enable_compression = true if (RACK_ENV == 'production')
  end

  configure :production do
    enable :asset_stamp
    enable :caching
    expires 3600 * 12
    set :haml, ugly: true
    settings.assets.js_compressor = Uglifier.new(output: {comments: :none}, mangle: true)
    use Rack::DomainRedirect, ["arewesmallyet.com"]
    # You can customize caching store engines:
    #
    #   set :cache, Padrino::Cache::Store::Memcache.new(::Memcached.new('127.0.0.1:11211', exception_retry_limit: 1))
    #   set :cache, Padrino::Cache::Store::Memcache.new(::Dalli::Client.new('127.0.0.1:11211', exception_retry_limit: 1))
    #   set :cache, Padrino::Cache::Store::Redis.new(::Redis.new(host: '127.0.0.1', port: 6379, db: 0))
    #   set :cache, Padrino::Cache::Store::Memory.new(50)
    #   set :cache, Padrino::Cache::Store::File.new(Padrino.root('tmp', app_name.to_s, 'cache')) # default choice
    set :cache, Padrino::Cache::Store::Memcache.new(::Dalli::Client.new(exception_retry_limit: 1))
  end

end
