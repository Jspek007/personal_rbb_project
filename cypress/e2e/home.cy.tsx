describe('Home Page', () => {
  it('Displays 4 links about Next.js', () => {
    cy.visit('/');
    cy.dataCy('link-grid').find('a').should('have.length', 4)
  });
  it('The first link should read Docs', () => {
    cy.visit('/');
    cy.dataCy('grid-link')
      .eq(0)
      .within(() => {
        cy.dataCy('grid-link-header').should('contain', 'Docs');
      });
  })
});
