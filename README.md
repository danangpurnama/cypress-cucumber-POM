# cypress-cucumber-example

Initial example of using Cypress with Cucumber.

There are examples that are part of a Continuous Integration build in the main repo, that also showcase more advanced
usage, please refer there as well - https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/tree/master/cypress

# Installation

```
npm install
```

# Run example tests

Developtment

```
npm run developmentgits
npm run developmentebay
```

Test

```
npm run testgits
npm run testebay
```

### Examples:

Feature: As User Access a Product Ebay

    Scenario: Access a Product via category after applying multiple filters
        Given User Go to www.ebay.com
        When User Navigate to Search by category > Electronics > Cell Phones & accessories
        And After the page loads, click Cell Phones & Smartphones in the left hand side navigation section.
        And User click - More refinements appears on the left at the end of all filters
        And User Add 3 filters - screen size, Price and Item location appearing in the pop-up and click apply.
        Then User Verify that the filter tags are applied.
