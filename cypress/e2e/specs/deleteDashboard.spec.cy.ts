import {DashboardPage} from '../pageObjects/dashboardPage';

describe('example to-do app', () => {
  const dashboardPage = new DashboardPage()
  const dashboardName = 'Test name'

  before(() => {
    cy.login()
  })

  it('User should be able to add a new dashboard via UI', () => {
    dashboardPage.clickAddNewDashboardButton()
    dashboardPage.fillNewDashboardForm(dashboardName, 'Test description')
    dashboardPage.getAddNewWidgetButton().should('be.visible')
    dashboardPage.deleteDashboard(dashboardName)
    dashboardPage.getSuccessfulDeletePopup().should('be.visible')
  })


})
