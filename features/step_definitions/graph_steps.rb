Then /^I should be shown a graph$/ do
  assert page.has_selector?('canvas.flot-overlay'), 'graph missing'
end
