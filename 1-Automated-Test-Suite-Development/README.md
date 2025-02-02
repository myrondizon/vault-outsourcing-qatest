**Scenario:** 
Our team recently deployed a new login feature for a high-traffic web application that includes: 
- Email and password login. 
- Two-factor authentication (2FA) with SMS and email. 
- Social media login (e.g., Google, Facebook). 
- Password recovery options. 

The feature is experiencing issues during peak usage, with an increase in user complaints about login failures and 2FA problems. The team needs a robust automated test suite to ensure the reliability and security of this feature. 

**Task:** 
- Write sample automated test scripts for the login feature, covering the following key scenarios: 
- Successful login using email and password.
- Failed login attempt with an incorrect password. 
- Successful 2FA verification using an SMS code. 
- Social media login via Google. 

You are not required to cover every edge case but should focus on providing examples for the listed scenarios. Include comments explaining the logic of each test and any additional considerations (e.g., edge cases you would include in a full suite). Your scripts should demonstrate best practices in test automation, such as setup, teardown, and error handling. 

**Requirements:** 
- The script should be well-structured and include error handling. 
- Include setup instructions and dependencies in the README.md. 

===============

# Test Setup
## Prerequisites
1. Ensure you have a valid email and valid password for login
2. Ensure that you have SMS have test account with SMS provider.
3. Ensure that you have test account with Google login.
4. Ensure that the website to be tested is working.

# Dependencies
1. Cypress setup on local machine is OK; unless there's a Docker instance that allows it to be used in the local machine
2. Node.js and cypress versions correctly installed
3. There's an API service that displays the received SMS code. It will be GET through another window and cypress will copy paste it to the input field
4. Likewise there's an email service that allows us to get the password recovery link to change the password of an account. 
