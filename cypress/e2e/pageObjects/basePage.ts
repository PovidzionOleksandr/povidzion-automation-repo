export class BasePage {
//locators
  getAddNewDashboardButton = () => cy.get('div[class*="addDashboardButton"] button')
  getDashboardNameField = () => cy.get('div[class*=modalLayout] input')
  getDashboardDescriptionField = () => cy.get('div[class*=modalLayout] textarea')
  getConfirmAddNewDashboardButton = () => cy.get('div[class*=modalLayout] button').contains('Add')
  getAddNewWidgetButton = () => cy.get('div[class="widgets-grid"] span').contains('Add new widget')
  getSuccessfulDeletePopup = () => cy.get('p').contains('Dashboard has been deleted')

//interactions
  fillNewDashboardForm(name: string, description: string){
    this.getDashboardNameField().type(name)
    this.getDashboardDescriptionField().type(description)
    this.getConfirmAddNewDashboardButton().click()
  }

  clickAddNewDashboardButton (){
    this.getAddNewDashboardButton().first().click()
  }
}