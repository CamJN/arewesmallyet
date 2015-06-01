source 'https://rubygems.org'

# Project requirements
gem 'rake'

# Component requirements
gem 'haml'
gem 'sequel'

# database
gem 'pg'

# Padrino Stable Gem
gem 'padrino'

gem 'padrino-pipeline'

group :development do

gem 'rack-mini-profiler'
gem 'stackprof'
gem 'flamegraph', github: 'CamJN/flamegraph', branch: 'filtering'
end

group :production do
gem 'dalli'
gem 'uglifier'
gem 'yui-compressor'
end

group :test do
gem 'open_uri_redirections'
gem 'capybara-webkit'
gem 'capybara'
gem 'cucumber'
end
