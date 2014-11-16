require_relative "../lib/domainredirect.rb"

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

  get :index, :cache => true do
    expires 3600 * 6
    @records = Record.order(:day)
    render :index
  end

  get :data, provides: :json do
    @records = Record.order(:day).map do |r|
      {r.day.to_s => JSON.parse(r.data)}
    end.reduce({}, :merge)
    @records.to_json
  end

  get "/*", :priority => :low do
    redirect "/"
  end

  configure_assets do |config|
    config.pipeline = Padrino::Pipeline::Sprockets
    config.prefix = '/public'
  end

  ##
  # Caching support
  #
  # register Padrino::Cache
  # enable :caching
  #
  # You can customize caching store engines:
  #
  #   set :cache, Padrino::Cache::Store::Memcache.new(::Memcached.new('127.0.0.1:11211', :exception_retry_limit => 1))
  #   set :cache, Padrino::Cache::Store::Memcache.new(::Dalli::Client.new('127.0.0.1:11211', :exception_retry_limit => 1))
  #   set :cache, Padrino::Cache::Store::Redis.new(::Redis.new(:host => '127.0.0.1', :port => 6379, :db => 0))
  #   set :cache, Padrino::Cache::Store::Memory.new(50)
  #   set :cache, Padrino::Cache::Store::File.new(Padrino.root('tmp', app_name.to_s, 'cache')) # default choice
  #

  configure :production do
    set :cache, Padrino::Cache::Store::Memcache.new(::Dalli::Client.new(:exception_retry_limit => 1))
  end

  ##
  # Application configuration options
  #
  # set :raise_errors, true       # Raise exceptions (will stop application) (default for test)
  # set :dump_errors, true        # Exception backtraces are written to STDERR (default for production/development)
  # set :show_exceptions, true    # Shows a stack trace in browser (default for development)
  # set :logging, true            # Logging in STDOUT for development and file for production (default only for development)
  # set :public_folder, "foo/bar" # Location for static assets (default root/public)
  # set :reload, false            # Reload application files (default in development)
  # set :default_builder, "foo"   # Set a custom form builder (default 'StandardFormBuilder')
  # set :locale_path, "bar"       # Set path for I18n translations (default your_app/locales)
  # disable :sessions             # Disabled sessions by default (enable if needed)
  # disable :flash                # Disables sinatra-flash (enabled by default if Sinatra::Flash is defined)
  # layout  :my_layout            # Layout can be in views/layouts/foo.ext or views/foo.ext (default :application)
  #

  ##
  # You can configure for a specified environment like:
  #
  #   configure :development do
  #     set :foo, :bar
  #     disable :asset_stamp # no asset timestamping for dev
  #   end
  #

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
