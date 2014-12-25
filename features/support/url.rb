module Cucumber
  module Web
    module URLs
      def url_for(*names)
        Capybara.app.url_for(*names)
      end
      alias_method :url, :url_for

      def absolute_url_for(*names)
        "http://arewesmallyet.dev" + Capybara.app.url_for(*names)
      end
      alias_method :absolute_url, :absolute_url_for

      def path_to(webpage)
        case webpage
        when 'home'
          '/'
        when 'data'
          '/data'
        end
      end

    end
  end
end

World(Cucumber::Web::URLs)
