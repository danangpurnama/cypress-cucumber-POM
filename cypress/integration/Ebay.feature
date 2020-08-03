Feature: As User Access a Product Ebay

    Scenario: Access a Product via category after applying multiple filters
        Given User Go to www.ebay.com
        When User Navigate to Search by category > Electronics > Cell Phones & accessories
        And After the page loads, click Cell Phones & Smartphones in the left hand side navigation section.
        And User click - More refinements appears on the left at the end of all filters
        And User Add 3 filters - screen size, Price and Item location appearing in the pop-up and click apply.
        Then User Verify that the filter tags are applied.

    Scenario: Access a Product via Search
        Given User Go to www.ebay.com
        When User Type any search string in the search bar. For example: MacBook.
        And User Change the Search category. For example: Computers Tablets & Networking and click Search.
        Then User Verify that the first result name matches with the search string.