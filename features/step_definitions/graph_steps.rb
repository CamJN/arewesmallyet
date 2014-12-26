Then /^I should be shown a graph$/ do
  puts page.html
  assert page.has_selector?('canvas.flot-overlay'), 'graph missing'
end
