describe('Basic Component Page Tests', () => {

    it('should load Home Page', () => {
      cy.visit('http://localhost:5173/')
      cy.contains('Product').should('exist') 
    })
  
    it('should load Product Detail Page', () => {
      cy.visit('http://localhost:5173/product/2')
      cy.contains('Add to Cart').should('exist') 
    })
  
    it('should load Cart Page', () => {
      cy.visit('http://localhost:5173/cart')
      cy.contains('Cart').should('exist') 
    })
  })
  