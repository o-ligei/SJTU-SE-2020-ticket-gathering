describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('http://localhost:3000/') // change URL to match your dev URL

        cy.get('.ant-dropdown-trigger > span').click()

        cy.url().should("include","login")
    })
})