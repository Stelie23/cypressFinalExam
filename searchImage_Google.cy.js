/// <reference types="Cypress" />


//location may be different from yours, update it
import homePage from "../support/Demo_PageObjectModel/Methods/homePage.js";
import resultPage from "../support/Demo_PageObjectModel/Methods/resultPage.js";
import imagePage from "../support/Demo_PageObjectModel/Methods/imagePage.js";

describe("Using POM Demo", function () {
  beforeEach(function () {
    cy.visit("https://google.com");
    cy.fixture("trial/fixtureDemo").then((searchInput) => {
      this.searchInput = searchInput;
    });
  });

  it("Searching cheese using POM and fixture", function () {
    const home = new homePage();
    const result = new resultPage();
    const image = new imagePage();
    home.typeSearchItem(this.searchInput.searchCategory1);
    cy.wait(1000);
    home.clickSearchButton();
    cy.wait(3000);
    cy.log("Click Result Image Link");
    result.clickResultImageLink();
    image.clickSafeSearch();
    cy.log("Click Hide Explecit Result");
    image.clickHideExplecit();
  });

  it("Searching bread using POM and fixture", function () {
    const home = new homePage();
    const result = new resultPage();
    const image = new imagePage();
    home.typeSearchItem(this.searchInput.searchCategory2);
    home.clickSearchButton();
    result.clickResultImageLink();
    image.clickSafeSearch();
    image.clickHideExplecit();
  });

  it("Searching milk using POM and fixture", function () {
    const home = new homePage();
    const result = new resultPage();
    const image = new imagePage();
    home.typeSearchItem(this.searchInput.searchCategory3);
    home.clickSearchButton();
    result.clickResultImageLink();
    image.clickSafeSearch();
    image.clickHideExplecit();
  });
});
