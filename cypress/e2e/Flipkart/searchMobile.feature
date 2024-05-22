Feature: Flipkart Search
    Create an XPath to select all mobile phones on the Flipkart website that are priced under 10000.
    Scenario: Search mobile under 10000 from Flipkart website
    Given I visited the Flipkart website
    When I enter mobile as search keyword
    And Start to type your And step here I submit the search
    Then I list the mobiles under the price of 10000 and display the name of each mobile