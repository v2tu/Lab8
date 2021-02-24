describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () =>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el){
      expect($el).to.have.value(75)
    })
  })

  it("Volume changes when slider changes", () =>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el){
      expect($el).to.have.value(33)
    })
  })

  it("Audio element set correctly when slider changes", () =>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('volume', 0.33)
    })
  })

  it("Image and Sounde Source changes when select the party radio horn button", () => {
    cy.get('#radio-party-horn').click()
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3")
    })
    cy.get('#sound-image').then(function($el){
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg")
    })
  })

  it("Volume image changes when increasing volumnes", () =>{
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-0.svg")
    })

    cy.get('#volume-number').clear().type('5');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg")
    })

    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg")
    })

    cy.get('#volume-number').clear().type('80');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-3.svg")
    })
  })

  it("Honk button is disbaled if textbox input is empty or a non-number", () =>
  {
    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.attr('disabled', 'disabled')
    })

    cy.get('#volume-number').clear().type('e')
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.attr('disabled', 'disabled')
    })
  })

  it("Error shown when a number is inputed that is out the given range", () => {
    cy.get('#volume-number').clear().type('1000')
    cy.get('#honk-btn').click()
    cy.get('input:invalid').should('have.length',1)
  })
});
