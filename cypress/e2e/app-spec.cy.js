describe('app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have an intro message', () => {
    cy.get('h2').contains('Welcome to History Class!')
  })
  it('should have a main title, input and collection button', () => {
    cy.get('h1').contains('HISTORY CLASS')
      .get('button').contains('COLLECTION')
      .get('input')
      .get('button').contains('GO')
  })
})