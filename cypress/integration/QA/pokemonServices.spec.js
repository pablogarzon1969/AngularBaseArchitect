
it('visitar sitio home', () => {
  cy.visit('http://localhost:4200')
 // cy.get('h2').contains('Home Page')
});

describe('Servicios Rest Pokemon', function () {
  it('Pokemones', function () {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
      header: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(response.body).have.property('count');
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');

      body.results.forEach(function (item) {
        let res = JSON.parse(JSON.stringify(item));
        expect(item).to.have.all.keys('name', 'url');
      });
    });

  })

  it('Pokemon', function () {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    }).then(function (response) {
      expect(response.body).have.property('abilities');
    })
  });

    it('Pokemon', function () {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    ).its('body').should('include', {weight: 69})
  });
})
