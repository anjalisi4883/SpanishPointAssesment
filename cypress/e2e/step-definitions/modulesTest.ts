import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User visit the baseurl', () => {
  //cy.log('logging into '+ Cypress.config('baseUrl'));
  cy.visit('/');
});

When('User expand the {string} section in the header', (section: string) => {
  //when test running in cypress , header appears on the left hand side
  cy.get('#burger').click();
  cy.contains(section).click();
});

When('User click on {string} from the menu', (menu: string) => {
  cy.contains(menu).click();
});

When('User scroll to the Additional Features section', () => {
  cy.contains('Additional Features').scrollIntoView();
});

When('User clicks on the {string}', (menuOption: string) => {
  cy.contains(menuOption).click();
});

Then('Verify the list of product supported', () => {

  cy.contains('There are several types of Product Supported:').siblings().children().children('ul').children('li').then((listItems) => {
    expect(listItems).to.have.length(4);
    // Extracting text from each list item
    const list = listItems.map((index, el) => Cypress.$(el).text().trim()).get();
    cy.log(`Extracted text: ${list}`);
    expect(list).to.include.members(['Cue Sheet / AV Work​', 'Recording​', 'Bundle​', 'Advertisement']);

  });
})