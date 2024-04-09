import {DashboardPage} from '../pageObjects/dashboardPage';

describe('example to-do app', () => {
  const dashboardPage = new DashboardPage()

  before(() => {
    cy.login()
  })

  after(() =>{
    dashboardPage.deleteDashboard('Test name')
  })

  it('User should be able to add a new dashboard via UI', () => {
    dashboardPage.clickAddNewDashboardButton()
    dashboardPage.fillNewDashboardForm('Test name', 'Test description')
    dashboardPage.getAddNewWidgetButton().should('be.visible')
  })


})
