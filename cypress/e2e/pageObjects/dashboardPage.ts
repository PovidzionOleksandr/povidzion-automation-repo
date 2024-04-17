import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
//locators
  getDashboardFromList = (name:string) => cy.get('div[class*="dashboardTable"] a').contains(name)
  getDeleteDashboardButton = () => cy.get('span').contains('Delete')
  getModalConfirmDeleteButton = () => cy.get('div[class*="modal-window"] button').last()
  getEditDashboardButton = () => cy.get('button').contains('Edit')
  getConfirmUpdateDashboardButton = () => cy.get('div[class*=modalLayout] button').contains('Update')
  getDashboardDescriptionFromList = (description:string) => cy.get('div[class*="dashboardTable"] div').contains(description)
//interactions
  deleteDashboard(name: string){
    cy.visit('/')
    this.getDashboardFromList(name).click()
    this.getDeleteDashboardButton().click()
    this.getModalConfirmDeleteButton().click()
  }

  openEditDashboardModal = () => this.getEditDashboardButton().click()

  editAndConfirmDashboardForm(name: string, description: string){
    this.getDashboardNameField().clear().type(name)
    this.getDashboardDescriptionField().clear().type(description)
    this.getConfirmUpdateDashboardButton().click()
  }
//assertions

}
