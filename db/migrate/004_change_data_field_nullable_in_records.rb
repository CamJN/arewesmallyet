Sequel.migration do
  up do
    alter_table(:records) do
      set_column_not_null :data
      set_column_not_null :day
    end
  end

  down do
    alter_table(:records) do
      set_column_allow_null :data
      set_column_allow_null :day
    end
  end

end
