class Arewesmallyet < Padrino::Application

  get :index do
    render :index
  end

  get :data, provides: :json do
    # params[:lt]
    # params[:gt]
    Sequel::Model.db.fetch("select json_object_agg(day,data order by day) as jsobj from records;").first[:jsobj]
  end

  get :stats, provides: :json do
    Sequel::Model.db.fetch("select json_build_object(
    'max_mac', max((data->>'mac')::int),
    'min_mac', min((data->>'mac')::int),
    'max_win', max((data->>'win')::int),
    'min_win', min((data->>'win')::int),
    'max_win64', max((data->>'win64')::int),
    'min_win64', min((data->>'win64')::int),
    'max_linux', max((data->>'linux')::int),
    'min_linux', min((data->>'linux')::int),
    'max_linux64', max((data->>'linux64')::int),
    'min_linux64', min((data->>'linux64')::int),
    'count_linux', count(data->'linux'),
    'count_linux64', count(data->'linux64'),
    'count_win', count(data->'win'),
    'count_win64', count(data->'win64'),
    'count_mac', count(data->'mac'),
    'count', count(*),
    'first', min(day),
    'last', max(day),
    'slope_linux', regr_slope((data->>'linux')::int,EXTRACT(EPOCH FROM day)),
    'slope_linux64', regr_slope((data->>'linux64')::int,EXTRACT(EPOCH FROM day)),
    'slope_win', regr_slope((data->>'win')::int,EXTRACT(EPOCH FROM day)),
    'slope_win64', regr_slope((data->>'win64')::int,EXTRACT(EPOCH FROM day)),
    'slope_mac', regr_slope((data->>'mac')::int,EXTRACT(EPOCH FROM day))
    ) as jsobj from records;").first[:jsobj]
    # slope is bytes / second
  end

  get "/*", :priority => :low do
    redirect "/"
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
