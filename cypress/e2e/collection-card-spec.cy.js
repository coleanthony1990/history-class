describe('collection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should be able to delete a card from the collection', () => {
    cy.get('.input').type('italy')
    .get('.submit').click()
    .get(':nth-child(1) > .add > svg').click()
    .get('.collection').click()
    .get(':nth-child(1) > .year').contains('C.E. 1355')
    .get(':nth-child(1) > .historical-event').contains('Charles IV of Bohemia is crowned with the Iron Crown of Lombardy as King of Italy in Milan.')
    .get('.year').contains('C.E. 1355')
    .get(':nth-child(1) > .delete > svg').click()
  })
  it('should give the user a message if there are no cards in the collection', () => {
    cy.get('.collection').click()
    cy.get('h2').contains('You have no histroy cards in here. Click the "+" to add some.')
  })
})