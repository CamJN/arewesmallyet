module Cucumber
  module Database
    module Data
      def ensure_record(date, data)
        rec = Record.first(day: date)
        rec = Record.new(day: date) unless rec
        rec.data = data.to_json
        rec.save
      end
    end
  end
end

World(Cucumber::Database::Data)
