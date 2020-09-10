import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../Elements/Gist/SignInPage";
import HomePage from "../Elements/Gist/HomePage";
import GistPage from "../Elements/Gist/GistPage";

const random = Math.random().toString(36).substring(7);
const gist = new GistPage();
const home = new HomePage();
const sigIn = new SignInPage();

// Scenario : As a user, I want to create a public gist

Given(`user access gist`, () => {
  sigIn.visit();
  cy.fixture("testdata").then(function (data) {
    this.data = data;
    sigIn.fillUsername(this.data.Email);
    sigIn.fillPassword(this.data.Password);
    sigIn.submit();
  });
});

When(`user add new public gist`, () => {
  home.ButtonCreateNewgist();
  gist.fillgistname(random);
  gist.fillgistvalue(random);
  gist.button_dropdown();
  gist.button_public_gist();
  gist.submit();
});

Then(`displayed gist added`, () => {
  gist.assert(random);
});

// Scenario: As a user, I want to edit an existing gist

When(`user edit an existing gist`, () => {
  home.Dropdownmenu();
  home.ButtonListGist();
  gist.detailgist(random);
  gist.editgist();
  gist.fillgistname(random + "1");
  gist.updategist();
});

Then(`displayed gist updated`, () => {
  gist.assert(random + "1");
});

// Scenario: As a user, I want to delete an existing gist

When(`user delete an existing gist`, () => {
  home.Dropdownmenu();
  home.ButtonListGist();
  gist.detailgist(random + "1");
  gist.deletegist();
});

Then(`displayed list all gist`, () => {
  gist.assertdelete(random + "1");
});

// Scenario: As a user, I want to see my list of gists.

When(`user click see all of your gists`, () => {
  home.Dropdownmenu();
  home.ButtonListGist();
});

Then(`displayed list all gist`, () => {
  gist.assert(random);
});
