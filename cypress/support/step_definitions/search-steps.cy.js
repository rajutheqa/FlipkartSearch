import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visited the Flipkart website", () => {
  cy.visit("https://www.flipkart.com/");
});
When("I enter mobile as search keyword", () => {
  cy.get('[name="q"]').type("mobile");
});
When("Start to type your And step here I submit the search", () => {
  cy.get('[name="q"]').type("{enter}");
});
Then("I list the mobiles under the price of 10000 and display the name of each mobile", () => {
  var name = []
  cy.get('[class="KzDlHZ"]').each(($elName, nameIndex, $listName) => {
    name.push($elName.text())
  })
  cy.get('[class="Nx9bqj _4b5DiR"]').each(($elPrice, index, $list) => {
      var price = $elPrice.text();
      price = price.split("₹").join("").split(",").join("");
      if (price < 10000) {
        cy.log("Name of the mobile: "+name[index]+" and price: ₹"+price);
    }
  })
});
