Feature: Graph
  In order to track firefox's size
  As a concerned user
  I want to be shown a graph of the sizes over time

  @javascript @wip
  Scenario: home page
    Given records exist in the database
    When I visit the home page
    Then I should be shown a graph
