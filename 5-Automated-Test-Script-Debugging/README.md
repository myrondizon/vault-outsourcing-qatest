**Scenario:**
The following Python script is intended to automate the testing of a simple login page using Selenium. However, the script has several (potential) bugs that need to be fixed. 

**Fixes**
1. Added proper imports for WebDriverWait and expected_conditions.
2. Added the missing click() action on the login button.
3. Wrapped the main code in a try/finally block to ensure the driver is always closed.
4. Assumed that success_message will throw "Welcome. Login successful!"
5. Stored credentials in config.json file