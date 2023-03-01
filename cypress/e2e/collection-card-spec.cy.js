describe('collection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should be able to delete a card from the collection', () => {
    cy.get('.input').type('italy')
    .get('.submit').click()
    .intercept('https://api.api-ninjas.com/v1/historicalevents?text=italy', {fixture: 'stub-data.json'})
    .get(':nth-child(1) > .add > svg').click()
    .get('.collection').click()
    .get(':nth-child(1) > .year').contains('1348 C.E.')
    .get(':nth-child(1) > .historical-event').contains('A strong earthquake strikes the South Alpine region of Friuli in modern Italy, causing considerable damage to buildings as far away as Rome.')
    .get(':nth-child(1) > .delete > svg').click()
  })
  it('should give the user a message if there are no cards in the collection', () => {
    cy.get('.collection').click()
    cy.get('h2').contains('You have no history cards in here. Click the "+" to add some.')
  })
})