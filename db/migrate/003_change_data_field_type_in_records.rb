Sequel.migration do
  up do
      # set_column_type :data, Json, :using=>(Sequel.cast('data', Json))
      run 'ALTER TABLE "records" ALTER COLUMN "data" TYPE json USING (CAST(data AS json));'
  end

  down do
      # set_column_type :data, Text, :using=>(Sequel.cast('data', Text))
      run 'ALTER TABLE "records" ALTER COLUMN "data" TYPE text USING (CAST(data AS text));'
  end
end
