describe('card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should display cards when typing a word into the input', () => {
    cy.get('.input').type('italy')
      .get('.submit').click()
      .intercept('https://api.api-ninjas.com/v1/historicalevents?text=italy', {fixture: 'stub-data.json'})
      .get(':nth-child(1) > .year').contains('1348 C.E.')
      .get(':nth-child(1) > .historical-event').contains('A strong earthquake strikes the South Alpine region of Friuli in modern Italy, causing considerable damage to buildings as far away as Rome.')
      .get(':nth-child(1) > .add > svg')
  })
  it('should be able to add a card to collection', () => {
    cy.get('.input').type('italy')
      .get('.submit').click()
      .intercept('https://api.api-ninjas.com/v1/historicalevents?text=italy', {fixture: 'stub-data.json'})
      .get(':nth-child(1) > .add > svg').click()
      .get('.collection').click()
      .get(':nth-child(1) > .year').contains('1348 C.E.')
      .get('.collection-title').contains('Collection')
      .get(':nth-child(1) > .historical-event').contains('A strong earthquake strikes the South Alpine region of Friuli in modern Italy, causing considerable damage to buildings as far away as Rome.')
  })
  it('should give you a message if the keyword yeilds no result', () => {
    cy.get('.input').type('potato')
      .get('button').contains('GO').click()
      .get('h2').contains('We have no data for this keyword. Try another keyword')
  })
  it('should give you an alert when you try to add a card to your collection more than once', () => {
    cy.get('.input').type('italy')
      .get('.submit').click()
      .intercept('https://api.api-ninjas.com/v1/historicalevents?text=italy', {fixture: 'stub-data.json'})
      .get(':nth-child(1) > .add > svg').click()
      .get(':nth-child(1) > .add > svg').click()
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('This history card is already in your collection')
    })
  })
  it('should give you a message if an error occurs with the fetch', () => {
    cy.get('.input').type('italy')
      .get('.submit').click()
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/historicalevents?text=italy', {
      forceNetworkError: true,
    })
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('Failed to fetch');
    })
  })
})