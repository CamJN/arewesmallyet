Sequel::Model.plugin(:schema)
#Sequel::Model.raise_on_save_failure = false # Do not throw exceptions on failure
Sequel::Model.db = case Padrino.env
  when :development then Sequel.connect(adapter:'postgres', host:'localhost', port:5432, database:'arewesmallyet', user:'camdennarzt')
  when :production  then Sequel.connect(ENV['DATABASE_URL'],  :loggers => [logger])
  when :test        then Sequel.connect(adapter:'postgres', host:'localhost', port:5432, database:'arewesmallyet_test', user:'camdennarzt')
end

Sequel::Model.db.extension(:connection_validator)
