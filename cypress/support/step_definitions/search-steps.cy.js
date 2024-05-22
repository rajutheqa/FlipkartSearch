import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../pageObject/searchPage.cy";
import data from "../../fixtures/searchKey.json"
 
let searchPage = new SearchPage()

Given("I visited the Flipkart website", () => {
  searchPage.visitPage()
});
When("I enter mobile as search keyword", () => {
  searchPage.search(data.searchInputID, data.searchKey)
});
When("Start to type your And step here I submit the search", () => {
  searchPage.hitKey(data.searchInputID, "enter")
});
Then("I list the mobiles under the price of 10000 and display the name of each mobile", () => {
  searchPage.findMobilePriceAndName(data.mobileNameClass, data.priceLimitClass, data.priceLimit)
});
