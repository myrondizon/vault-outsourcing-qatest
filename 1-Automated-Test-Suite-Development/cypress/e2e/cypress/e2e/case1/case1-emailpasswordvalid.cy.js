describe('User Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/'); // replace with actual URL
  });

  //smoke test
  it('shall verify that the login page elements are existing and visible', () => {
    cy.get('#user-name').should('exist').and('be.visible')
    cy.get('#password').should('exist').and('be.visible')
    cy.get('#login-button').should('exist').and('be.visible')
  });

  //functional test error handling
  it('shall produce an error message if the user inputted invalid credentials', () => {
    cy.fixture('variables').then((credentials) => {
      cy.get('#user-name').type(credentials.invalid_username)
      cy.get('#password').type(credentials.invalid_password)
      cy.get('#login-button').should('exist').and('be.visible').click()

      cy.get('.error-message-container')
        .should('be.visible')
        .and('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
  });

  //happy path 
  //succesful login assertion
  it('shall navigate to dashboard if the user inputted valid credentials', () => {
    cy.fixture('variables').then((credentials) => {
      cy.get('#user-name').type(credentials.valid_username);
      cy.get('#password').type(credentials.valid_password);
      cy.get('#login-button').should('exist').and('be.visible').click();

      cy.wait(1000); //10 seconds
      cy.url().should('include', '/inventory'); 
      cy.get('.inventory_list', { timeout: 10000 }).should('be.visible').within(() => {
        cy.contains('Backpack', { timeout: 10000 }).should('be.visible');
      });
    });
  });
});

//
// other tests - 2FA
//

// Given User Has 2FA Enabled
// When User Navigates to Log In Page
// And User Inputs Valid Credentials
// Then 2FA Prompt Window Shall Appear
// And six-digit 2FA code has been received by User 
// ^ I imagine that there's an API GET call for this which just opens a new tab then displays the valid SMS code

// Given 2FA Prompt Window Has Appeared
// And six-digit 2FA Code has been received by User
// When User Attempts to Input Invalid SMS code
// and clicks submit button
// Then error message should appear
// and new sms code should be sent to the user

// Given 2FA Prompt Has Appeared
// When User Attempts to Input Valid SMS code
// and clicks submit button
// Then 2FA Prompt Window Should Close
// And user should be navigated to dashboard

// Given 2FA Prompt Window Has Appeared
// When user does not input code
// Then 2FA Prompt Window closes aftrer three minutes
// Then error message should appear that login was unsuccessful

//
// other tests - Google Login
//

// Given Unregistered User Has Navigated to Website
// And Google Login button should be visible
// When user clicks Google Login
// Then another window opens to let the user confirm if linking accounts OK
// When user clicks Agree
// Then Window should close
// And user should be navigated to user onboarding page

// Given Google Registered User Has Navigated to Website
// And Google Login button should be visible
// When user clicks Google Login
// Then another window opens to check if accounts already linked
// And window closes
// And user has navigated to dashboard

// Given Google Registered User Has Navigated to Website
// And Google Login button should be visible
// And Google service is down
// When user clicks Google Login
// Then another window opens to check if accounts already linked
// And error message appears saying something is wrong

//
// other tests - Password Recovery
//

// Given User Has Navigated to Login Page
// And forgot password link should be visible 
// When User clicks forgot password
// then email input field should appear
// when user inputs valid email
// and clicks submit
// then success message appears
// and password link email reset should be sent to email client
//
// Given User Has Navigated to email client 
// When User clicks email containing password reset link
// Then email should contain password link
// When user clicks password reset link
// Then new window should appear
// and new password fields should appear
// When user inputs desired new password
// And clicks submit
// Then password should be reset succesfully
// And user should be navigated to login page
// 
// Given User Has Navigated to Login Page
// When user inputs valid username and new password
// Then user should be login successfully
// and user should be navigated to dashboard


//
// other tests wishlist
// if website is experiencing traffic issues, assert that high_volume message is appearing
// if there's issues with dependencies of SMS and Google integration, then should fail login attempt within three minutes
// if incorrect password three times, then lock the user account
// if locked user attempts to login, then login will fail and error message should appear
// if password recovery link has expired, then clicking the link will redirect to an error page
//
