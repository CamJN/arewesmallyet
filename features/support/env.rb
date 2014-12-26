RACK_ENV = 'test' unless defined?(RACK_ENV)
require File.expand_path(File.dirname(__FILE__) + "/../../config/boot.rb")
Dir[File.expand_path(File.dirname(__FILE__) + "/../../app/helpers/**/*.rb")].each(&method(:require))

require 'minitest/autorun'
require 'capybara/cucumber'
#require 'rspec/expectations'

##
# You can handle all padrino applications using instead:
#   Padrino.application
Capybara.app = Arewesmallyet
# Capybara.run_server = true
# Capybara.server_port = 3000
# Capybara.javascript_driver = :selenium
# Selenium::WebDriver::Firefox::Binary.path='/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin'
#Capybara.default_host = 'http://arewesmallyet.dev'
Capybara.app_host = 'http://arewesmallyet.dev'
