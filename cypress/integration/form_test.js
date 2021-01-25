describe('Pizza Order Form', () => {
    beforeEach(() => {
        cy.visit('/pizza')
    })

    it('sanity check', () => {
        expect(2 + 2).to.equal(4)
        expect(2 + 2).not.to.equal(5)
    })

    const instructionBox = () => cy.get('textarea')
    const pepperoniBox = () => cy.get(':nth-child(13) > input')
    const sausageBox = () => cy.get(':nth-child(14) > input')
    const canadianBaconBox = () => cy.get(':nth-child(15) > input')
    const blackOliveBox = () => cy.get(':nth-child(21) > input')

    const pizzaSizeDropDown = () => cy.get(':nth-child(4) > select');
    const pizzaSauceBox = () => cy.get(':nth-child(9) > input');
    const quantityDropDownBox = () => cy.get(':nth-child(29) > select');
    const nameInput = () => cy.get(':nth-child(32) > input');
    const houseNumberInput = () => cy.get(':nth-child(33) > input');
    const streetAddressInput = () => cy.get(':nth-child(34) > input');
    const cityInput = () => cy.get(':nth-child(35) > input');
    const postalCodeBox = () => cy.get(':nth-child(36) > input');
    const submitButton = () => cy.get('.orderButton');



    it('make sure that multiple toppings can be selected', () => {
        pepperoniBox().check().should('be.checked')
        sausageBox().check().should('be.checked')
        canadianBaconBox().check().should('be.checked')
        blackOliveBox().check().should('be.checked')
    })

    it('make sure that text can be added to the instruction box', () => {
        instructionBox().type("Add Extra Sauce")
        instructionBox().clear()
    })

    it('make sure that the order form can be submitted', () => {
        pepperoniBox().check().should('be.checked')
        sausageBox().check().should('be.checked')
        canadianBaconBox().check().should('be.checked')
        instructionBox().type("Add Extra Sauce")
        pizzaSizeDropDown().select('Small').should('have.value', 'Small')
        pizzaSauceBox().check().should('be.checked')
        quantityDropDownBox().select('2').should('have.value', '2')
        nameInput().type('Tom and Jerry')
        houseNumberInput().type('35')
        streetAddressInput().type('Jerry Way')
        cityInput().type('Jerry City')
        postalCodeBox().type('10089')
        submitButton().click()
    })
})