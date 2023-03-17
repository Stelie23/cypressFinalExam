const testData = require("../Locators/tricentisAutomobileVehicleData.json")

class automobilEnterVehicleDataPage {
    //Step 4 Input all the required vehicle data
    // selectMake(InputMake){
    // return cy.get(testData.make).select(InputMake);
    // }
    // typeEnginePerformance(InputEnginePerformance){
    // return cy.get(testData.enginePerformance).type(InputEnginePerformance);
    // }

    //Step 4 Input all the required vehicle data
    selectMake(){
    return cy.get(testData.make).select(testData.selectMake);
    }
    typeEnginePerformance(){
    return cy.get(testData.enginePerformance).type(testData.typeEnginePerformance);
    }
    typeDateOfManufacture(){
    return cy.get(testData.dateOfManufacture).type(testData.typeDateOfManufacture);
    }
    selectNumberOfSeats(){
    cy.get(testData.numberOfSeats).select(testData.selectNumberOfSeats);
    }
    selectFuelType(){
    return cy.get(testData.fuelType).select(testData.selectFuelType);
    }
    typeListPrice(){
    return cy.get(testData.listPrice).type(testData.typeListPrice);
    }
    typeLicensePlateNumber(){
    return cy.get(testData.licensePlateNumber).type(testData.typeLicensePlateNumber);
    }
    typeAnnualMileage(){
    return cy.get(testData.annualMileage).type(testData.typeAnnualMileage);
    }
    //Step 5 Click Next Button
    clickNextButton() {
    cy.get(testData.nextButton).click();
    }
}

  export default automobilEnterVehicleDataPage;
  