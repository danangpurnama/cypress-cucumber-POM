import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../Elements/Gits/SignInPage";
import HomePage from "../Elements/Gits/HomePage";
import GitsPage from "../Elements/Gits/GitsPage";

// Scenario : As a user, I want to create a public gist
const random = Math.random().toString(36).substring(7);
const gits = new GitsPage();
const home = new HomePage();
const sigIn = new SignInPage();

Given(`user access gist`, () => {
  sigIn.visit();
  sigIn.fillUsername("Username");
  sigIn.fillPassword("Password");
  sigIn.submit();
});

When(`user add new public gist`, () => {
  home.ButtonCreateNewGits();
  gits.fillGitsname(random);
  gits.fillGitsvalue(random);
  gits.submit();
});

Then(`displayed gist added`, () => {
  gits.assert(random);
});

// Scenario: As a user, I want to edit an existing gist

When(`user edit an existing gist`, () => {
  gits.visitGitsPage();
  gits.detailgits(random);
  gits.editgits();
  gits.fillGitsname(random + "1");
  gits.updategits();
});

Then(`displayed gist updated`, () => {
  gits.assert(random + "1");
});

// Scenario: As a user, I want to delete an existing gist

When(`user delete an existing gist`, () => {
  gits.visitGitsPage();
  gits.detailgits(random + "1");
  gits.deletegits();
});

Then(`displayed list all gist`, () => {
  gits.assertdelete(random + "1");
});

// Scenario: As a user, I want to see my list of gists.

When(`user click see all of your gists`, () => {
  gits.visitGitsPage();
});

Then(`displayed list all gist`, () => {
  gits.assert(random);
});
