/// <reference types="cypress" />

context('QA TEST', () => {
  before(() => {
    cy.viewport(1200, 1200)
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Status code 200 ', () => {
    cy.request('http://automationpractice.com/index.php').
    should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  //○	Add products from category sections and search results.
  //○	The cart in the header must reflect all products added by the user.
  it('Add products', () => {  
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').click()
    cy.get('.exclusive > span').click()
    cy.get('.continue > span').click()
    cy.get('.breadcrumb > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
    cy.get('.last-line > .product-container > .right-block > h5 > .product-name').click()
    cy.get('#group_1').select('M')
    cy.get('.exclusive > span').click()
    cy.get('.continue > span').click()
    cy.get('[title="View my shopping cart"]').click()
    cy.get('.logo').click()
  })

  //Ability to remove item from cart on the header.
  it('Ability to remove', () => {
    cy.get('[title="View my shopping cart"]')
    cy.get('.last_item > .remove_link > .ajax_cart_block_remove_link').click({force: true})
    cy.get('.logo').click()
  })

  //○	Users should be presented with checkout form using Proceed to checkout link on the header cart.

  it('Presented with checkout form', () => {
    cy.get('[title="View my shopping cart"]').click()
    cy.get('#button_order_cart').click()
  })
 
})
