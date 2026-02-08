Feature: Login to the system

  Scenario: Successful page opening and inputting number
    Given I open the page "https://practice.expandtesting.com/inputs"
    When I type "123456" into the number field
    And I wait 5 seconds
    Then I close the browser