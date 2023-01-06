import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit my portfolio site", () => {
  cy.visit("http://localhost:3000/");
});

Then("I should see my name in the center", () => {
  cy.get('h1[data-testid="hero-title"]').should(
    "have.text",
    "I am Dave Matney"
  );
});
