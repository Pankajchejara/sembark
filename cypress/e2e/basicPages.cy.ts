describe(' Basic Component Page Tests', () => {
  const baseUrl = 'http://localhost:5173'

  it('should load Home Page', () => {
    cy.visit(`${baseUrl}/`)
    cy.contains('Product').should('exist')
    cy.url().should('include', '/')
  })

  it('should load Product Detail Page', () => {
    cy.visit(`${baseUrl}/product/2`)
    cy.contains('Add to Cart').should('exist')
    cy.url().should('include', '/product/2')
  })

  it('should load Cart Page', () => {
    cy.visit(`${baseUrl}/cart`)
    cy.contains('Cart').should('exist')
    cy.url().should('include', '/cart')
  })
  
})
