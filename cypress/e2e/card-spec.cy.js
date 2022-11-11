describe('card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should display cards when typing a word into the input', () => {
    cy.get('.input').type('italy')
      .get('.submit').click()
      .intercept('https://api.api-ninjas.com/v1/historicalevents?text=italy', {fixture: 'stub-data.json'})
      .get(':nth-child(1) > .year').contains('C.E. 1355')
      .get(':nth-child(1) > .historical-event').contains('Charles IV of Bohemia is crowned with the Iron Crown of Lombardy as King of Italy in Milan.')
      .get(':nth-child(1) > .add > svg')
  })
  it('should be able to add a card to collection', () => {
    cy.get('.input').type('italy')
      .get('.submit').click()
      .get(':nth-child(1) > .add > svg').click()
      .get('.collection').click()
      .get(':nth-child(1) > .year').contains('C.E. 1355')
      .get('.collection-title').contains('Collection')
      .get(':nth-child(1) > .historical-event').contains('Charles IV of Bohemia is crowned with the Iron Crown of Lombardy as King of Italy in Milan.')
  })
})