# Defines our constants
RACK_ENV  = ENV['RACK_ENV'] ||= 'development'  unless defined?(RACK_ENV)
PADRINO_ROOT = File.expand_path('../..', __FILE__) unless defined?(PADRINO_ROOT)

# Load our dependencies
require 'rubygems' unless defined?(Gem)
require 'bundler/setup'
Bundler.require(:default, RACK_ENV)

# see https://github.com/padrino/padrino-framework/pull/859
require 'active_support/time_with_zone'

##
# Enable devel logging
#
 Padrino::Logger::Config[:development] = { log_level: :debug, stream: :to_file }
 Padrino::Logger::Config[:test] = { log_level: :debug, stream: :to_file }
#

##
# Add your before load hooks here
#
Padrino.before_load do
  Encoding.default_internal = nil
  Encoding.default_external = 'UTF-8'
end

##
# Add your after load hooks here
#
# Padrino.after_load do
# end

Padrino.load!
