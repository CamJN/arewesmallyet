When /^I visit the (.*) page$/ do |webpage|
  page.driver.allow_url(path_to(webpage)) if page.driver.respond_to? :allow_url
  visit path_to(webpage)
end

Then /^I should be served a webpage$/ do
  assert page.has_content?("ARE WE small YET?")
end

Given /^records exist in the database$/ do
  date = Date.parse "2012-06-11"
  data = {linux:23089576,linux64:25033906,win:17733856,win64:18891359,mac:42412851}
  ensure_record(date, data)
end

Then /^I should be served the json data$/ do
  assert page.has_content?('"2012-06-11" : {"linux":23089576,"linux64":25033906,"win":17733856,"win64":18891359,"mac":42412851}'), 'proper content missing'
end

Then /^I should be redirected to the (.*) page$/ do |webpage|
  assert_equal 'http://arewesmallyet.dev'+path_to(webpage), current_url
end
