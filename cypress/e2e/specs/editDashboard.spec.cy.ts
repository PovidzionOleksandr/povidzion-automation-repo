import {DashboardPage} from '../pageObjects/dashboardPage';

describe('Edit dashboard', () => {
  const dashboardPage = new DashboardPage()
  const dashboardName = 'Test name'

  before(() => {
    cy.login()
    dashboardPage.clickAddNewDashboardButton()
    dashboardPage.fillNewDashboardForm(dashboardName, 'Test description')
  })

  after(() =>{
    dashboardPage.deleteDashboard('Changed')
  })

  it('User should be able to edit a dashboard via UI', () => {
    dashboardPage.openEditDashboardModal()
    dashboardPage.editAndConfirmDashboardForm('Changed', 'Test description changed')
    cy.visit('https://demo.reportportal.io/ui/#default_personal/dashboard')
    dashboardPage.getDashboardFromList('Changed').should('be.visible')
    dashboardPage.getDashboardDescriptionFromList('Test description changed').should('be.visible')
  })
})
