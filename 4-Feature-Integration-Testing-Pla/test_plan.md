# Feature Integration Testing Plan

**Scenario:**

* We are planning to add a “Forgot Password” feature to the application, including:
* An input field for the user to enter their email (id="forgotEmail").
* A “Submit” button (id="submitForgotPassword").
* A confirmation message (id="confirmationMessage") that appears when the email is successfully submitted.

**Task:**

Write a brief test plan that includes:
1. High-level test scenarios for the “Forgot Password” feature.
2. At least 5 detailed test cases, including positive, negative, and edge cases.
3. Identify which test cases would be automated and which would be manual, and explain why.

Provide the test plan in a document (test_plan.md) covering description, preconditions, steps, expected result, test type, comments/edge cases.

====

## High-level Test Scenarios

 1. Unregistered user who does not have an account with the website.
 2. Registered User who has forgotten their password.
 3. Registered User who only has social media accounts linked with the website.
 4. Registered User can login with new password.
 5. Registered User that didn't change password shall be able to login.

## Detailed Test Cases
| Test Case Description | Precondition | Test Steps | Expected Results | Test Type | Comments/Edge Cases |
|--|--|--|--|--|--|
|1. Unregistered user should not be able to receive password reset link| User's email should not exist in website database | 1. Go to website. <br/> 2. Go to login page by clicking "Log in" link. <br/> 3. Click Forgot Password link. <br/> 4. Input user email in forgotEmail field. <br/> 5. Click submitForgotPassword button. <br/> 6. confirmationMessage appears below the forgotEmail field. | Checking the user's email client should not produce the password reset email and link. | Functional test | The appearance of the confirmationMessage can be automated as a UI test. Automating the email client test steps can be determined with existing test infrastructure.
| 2. Unregistered user with social media linked only should not receive password reset link | User with social media linked with website account | Follow steps from previous test case. | Similar to previous test case. | Functional test | Similar to previous row
| 3. Registered user with social media linked only should not receive password reset link | User with social media linked with website account | Follow steps from previous test case. | Similar to previous test case. | Functional test | Similar to previous row
| 4. Registered user shall be able to successfully reset password | User has existing account with website | 1. Go to website. <br/> 2. Go to login page by clicking "Log in" link. <br/> 3. Click Forgot Password link. <br/> 4. Input user email in forgotEmail field. <br/> 5. Click submitForgotPassword button. <br/> 6. confirmationMessage appears below the forgotEmail field. <br/> 7. Open email client and look for the password reset link. <br/> 8. Click the password reset link. <br/> 9. A new window should open and two password fields should appear. <br/> 10. User inputs new password twice and clicks submit. <br/> 11. User is redirected to log in page and then user inputs email and new password. | User should be able to log in with new password | Functional test | User should not be able to login with old password. <br/> Can be automated depending on test infrastructure
| 4. User who did not change password shall be able to login | User has existing account with website |1. Go to website. <br/> 2. Go to login page by clicking "Log in" link. <br/> 3. Click Forgot Password link. <br/> 4. Go back to log in page. <br/> 5. User inputs valid email and existing password. <br/> | User should be able to successfully log in | Functional test <br/> <br/> Regression Test | Can be automated
| 5. User who did not change password after password reset link has expired | User has existing account with website and three hours have gone|1. Go to website. <br/> 2. Go to login page by clicking "Log in" link. <br/> 3. Click Forgot Password link. <br/> 4. Input user email in forgotEmail field. <br/> 5. Click submitForgotPassword button. <br/> 6. confirmationMessage appears below the forgotEmail field. <br/> 7. Open email client and look for the password reset link. <br/> 8. Wait for three hours <br/> 9. Click the password reset link.  | User should see broken link page 404 after clicking reset password link | Functional test <br/> | Should be done manually first, then investigate if can be automated
