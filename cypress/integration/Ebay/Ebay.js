import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../Elements/Eaby/HomePage";
import CategoryPage from "../Elements/Eaby/CategoryPage";

const home = new HomePage();
const category = new CategoryPage();
const startprice = "100000";
const endprice = "1000000";
const keyword = "Macbook";

// Scenario: Access a Product via category after applying multiple filters

Given(`User Go to www.ebay.com`, () => {
  home.visit();
});

When(
  `User Navigate to Search by category > Electronics > Cell Phones & accessories`,
  () => {
    home.navbarCategory(3);
    home.spanCategory(1);
  }
);

And(
  `After the page loads, click Cell Phones & Smartphones in the left hand side navigation section.`,
  () => {
    category.dialogCell("Cell Phones & Smartphones", 2);
  }
);

And(
  `User click - More refinements appears on the left at the end of all filters`,
  () => {
    category.moreRefinements();
  }
);

And(
  `User Add 3 filters - screen size, Price and Item location appearing in the pop-up and click apply.`,
  () => {
    category.tabfilter(8);
    category.checkbox(1);
    category.tabfilter(21);
    category.fieldStartPrice(startprice, 3);
    category.fieldEndPrice(endprice, 4);
    category.tabfilter(23);
    category.itemLocation(5);
    category.applyfilter();
  }
);

Then(`User Verify that the filter tags are applied.`, () => {
  category.assertScreenSize("4.0 - 4.4 in");
  category.assertPrice("100,000");
  category.assertLocation("Asia");
});

// Scenario: Access a Product via Search

When(
  `User Type any search string in the search bar. For example: MacBook.`,
  () => {
    home.fieldSearch(keyword);
  }
);

And(
  `User Change the Search category. For example: Computers Tablets & Networking and click Search.`,
  () => {
    home.selectCategory("58058");
    home.buttonSearch();
  }
);

Then(
  `User Verify that the first result name matches with the search string.`,
  () => {
    home.assertResultSearch(keyword);
  }
);
