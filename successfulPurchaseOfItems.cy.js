///<reference types="Cypress" />

import tricentisHomePage from "../../support/FinalExam/Methods/tricentisHomePage.js";
import tricentisAutomobilePage from "../../support/FinalExam/Methods/tricentisAutomobilePage.js";
import tricentisAutomobileVehicleDataPage from "../../support/FinalExam/Methods/tricentisAutomobileVehicleDataPage.js";
import tricentisAutomobileInsurantDataPage from "../../support/FinalExam/Methods/tricentisAutomobileInsurantDataPage";
import tricentisAutomobileProductDataPage from "../../support/FinalExam/Methods/tricentisAutomobileProductDataPage.js";
import tricentisAutomobilePriceOptionPage from "../../support/FinalExam/Methods/tricentisAutomobilePriceOptionPage.js";
import tricentisAutomobileSendQuotePage from "../../support/FinalExam/Methods/tricentisAutomobileSendQuotePage.js";

const testData = require ("../../fixtures/FinalExam/finalExamFixture.json")


describe("Final Exam", function(){
    const tricentisHome = new tricentisHomePage();
    const tricentisAutomobile = new tricentisAutomobilePage();
    const tricentisAutomobileVehicleData = new tricentisAutomobileVehicleDataPage();
    const tricentisAutomobileInsurantData = new tricentisAutomobileInsurantDataPage();
    const tricentisAutomobileProductData = new tricentisAutomobileProductDataPage();
    const tricentisAutomobilePriceOption =  new tricentisAutomobilePriceOptionPage();
    const tricentisAutomobileSendQuote = new tricentisAutomobileSendQuotePage();
    beforeEach(function(){
        cy.fixture("FinalExam/finalExamFixture").then((applyAutomobileInsurance) => {
            this.applyAutomobileInsurance = applyAutomobileInsurance;
        });
    });

it("Step 1 - Verify Tricentis Home Page", function(){
    cy.visit("http://sampleapp.tricentis.com/101/");
    tricentisHome.verifyTricentisInsuranceMenus();
});

it("Step 2 - Click Automobile hyperlink", function(){
    tricentisHome.navigateToAutomobilePage();
});

it("Step 3 - Validate Automobile page", function(){
    tricentisAutomobile.verifyAutomobileInsurancePage();
    });

it("Step 4 - Enter Vehicle Data", function(){
    tricentisAutomobileVehicleData.selectMake(this.applyAutomobileInsurance.selectMake);
    tricentisAutomobileVehicleData.typeEnginePerformance(this.applyAutomobileInsurance.typeEnginePerformance);
    tricentisAutomobileVehicleData.typeDateOfManufacture(this.applyAutomobileInsurance.typeDateOfManufacture);
    tricentisAutomobileVehicleData.selectNumberOfSeats(this.applyAutomobileInsurance.selectNumberOfSeats);
    tricentisAutomobileVehicleData.selectFuelType(this.applyAutomobileInsurance.selectFuelType);
    tricentisAutomobileVehicleData.typeListPrice(this.applyAutomobileInsurance.typeListPrice);
    tricentisAutomobileVehicleData.typeLicensePlateNumber(this.applyAutomobileInsurance.typeLicensePlateNumber);
    tricentisAutomobileVehicleData.typeAnnualMileage(this.applyAutomobileInsurance.typeAnnualMileage);
});

it("Step 5 - Click Next button", function(){
    tricentisAutomobileVehicleData.clickNextButton();
    cy.wait(5000);
});

it("Step 6 - Enter Insurant Data", function(){
    tricentisAutomobileInsurantData.typeFirstName(this.applyAutomobileInsurance.typeFirstName);
    tricentisAutomobileInsurantData.typeLastName(this.applyAutomobileInsurance.typeLastName);
    tricentisAutomobileInsurantData.typeDateOfBirth(this.applyAutomobileInsurance.typeDateOfBirth);
    tricentisAutomobileInsurantData.selectGender(this.applyAutomobileInsurance.selectGender);
    tricentisAutomobileInsurantData.typeStreetAddress(this.applyAutomobileInsurance.typeStreetAddress);
    tricentisAutomobileInsurantData.selectCountry(this.applyAutomobileInsurance.selectCountry);
    tricentisAutomobileInsurantData.typeZipCode(this.applyAutomobileInsurance.typeZipCode);
    tricentisAutomobileInsurantData.typeCity(this.applyAutomobileInsurance.typeCity);
    tricentisAutomobileInsurantData.selectOccupation(this.applyAutomobileInsurance.selectOccupation);
    tricentisAutomobileInsurantData.selectHobbies(this.applyAutomobileInsurance.selectHobbies);
});

it("Step 7 - Click Next button", function(){
    tricentisAutomobileInsurantData.clickNextButton();
    cy.wait(5000);
});

it("Step 8 - Enter Product Data", function(){
    tricentisAutomobileProductData.typeStartDate(this.applyAutomobileInsurance.typeStartDate);
    tricentisAutomobileProductData.selectInsuranceSum(this.applyAutomobileInsurance.selectInsuranceSum);
    tricentisAutomobileProductData.selectMeritRating(this.applyAutomobileInsurance.selectMeritRating);
    tricentisAutomobileProductData.selectDamageInsurance(this.applyAutomobileInsurance.selectDamageInsurance);
    tricentisAutomobileProductData.selectOptionalProducts(this.applyAutomobileInsurance.selectOptionalProducts);
    tricentisAutomobileProductData.typeCourtesyCar(this.applyAutomobileInsurance.typeCourtesyCar);
});

it("Step 9 - Click Next button", function(){
    tricentisAutomobileProductData.clickNextButton();
    cy.wait(5000);
});

it("Step 10 - Select Ultimate Price option", function(){
    tricentisAutomobilePriceOption.selectPriceOption(this.applyAutomobileInsurance.selectPriceOption);
});

it("Step 11 - Click Next Button", function(){
    tricentisAutomobilePriceOption.clickNextButton();
    cy.wait(5000);
});

it("Step 12 - Send Quote", function(){
    tricentisAutomobileSendQuote.typeEmail(this.applyAutomobileInsurance.typeEmail);
    tricentisAutomobileSendQuote.typeUsername(this.applyAutomobileInsurance.typeUsername);
    tricentisAutomobileSendQuote.typePassword(this.applyAutomobileInsurance.typePassword);
    tricentisAutomobileSendQuote.typeConfirmPassword(this.applyAutomobileInsurance.typeConfirmPassword);
});

it("Step 13 - Click Send Button", function(){
    tricentisAutomobileSendQuote.clickSendButton();
    cy.wait(5000);
});

it("Step 14 - Validate Sending Email Success", function(){
    tricentisAutomobileSendQuote.validateSuccessMessage();
    cy.wait(5000);
});

it("Step 15 - Click Ok button", function(){
    tricentisAutomobileSendQuote.validateOkButtonIfDisplayed();
    cy.wait(5000);
});
});
