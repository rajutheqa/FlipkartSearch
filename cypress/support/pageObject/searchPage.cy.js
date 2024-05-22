class SearchPage {
  visitPage() {
    cy.visit("/");
  }
  search(searchInputID, searchKey) {
    cy.get(searchInputID).type(searchKey);
  }
  hitKey(searchInputID, key) {
    cy.get(searchInputID).type("{" + key + "}");
  }
  findMobilePriceAndName(mobileNameClass, priceLimitClass, priceLimit) {
    var name = [];
    cy.get(mobileNameClass).each(($elName, nameIndex, $listName) => {
      name.push($elName.text());
    });
    cy.get(priceLimitClass).each(($elPrice, index, $list) => {
      var price = $elPrice.text();
      price = price.split("₹").join("").split(",").join("");
      if (price < priceLimit) {
        cy.log("Name of the mobile: " + name[index] + " and price: ₹" + price);
      }
    });
  }
}
export default SearchPage;
