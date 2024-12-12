// Cypress Test Suite for Login Page

describe('Login Page Tests', () => {
    // const url = 'https://tise-internet.herokuapp.com/login';
   
     // Before each test, visit the login page
     beforeEach(() => {
       cy.visit('https://the-internet.herokuapp.com/login');
     });
   
     // After each test, clear cookies
     afterEach(() => {
       cy.clearCookies();
     });
   

     it('should display the Login button', () => {
       cy.get('button').contains('Login').should('be.visible');
     });
   
     it('should have a field with the placeholder text "Enter your email"', () => {
       cy.get('input[name="username"]').should('exist');
     });
   });