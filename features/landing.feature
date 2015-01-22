Feature: Landing
  In order to know what to display
  As a user agent
  I want to be served a webpage

  Scenario: home page
    When I visit the home page
    Then I should be served a webpage

  Scenario: data page
    Given records exist in the database
    When I visit the data page
    Then I should be served the json data

  Scenario: wrong page
    When I visit the incorrect page
    Then I should be redirected to the home page
