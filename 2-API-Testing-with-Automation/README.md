**Scenario:**
The application has an API endpoint for retrieving user information: 
GET /api/users/{userId} 
The response should return a JSON object with user details: { "id": "123", "name": "John Doe", "email": "john.doe@example.com" }. If the user is not found, the API should return a 404 status code. 

**Task:**
Write an automated test script using a testing framework of your choice. 
1. Test the API endpoint with a valid userId and verify that the response status is 200 and the returned user data is correct. 
2. Test the API endpoint with an invalid userId and verify that the response status is 404. 
3. Include test cases for edge scenarios (e.g., empty userId, special characters in userId). 

**Requirements:**
Use a test framework (e.g. Pytest) and include assertions for verifying the response. 
Provide a brief explanation of your approach and any tools you used. 
Include setup instructions and dependencies in the README.md. 

===============

# Test Setup
## Prerequisites
1. Ensure you have a valid email and valid password for login
2. Ensure that you have SMS have test account with SMS provider.
3. Ensure that you have test account with Google login.
4. Ensure that the website to be tested is working.

# Dependencies
1. Python setup on local machine is OK; unless there's a Docker instance that allows it to be used in the local machine
2. Python version correctly installed
3. Pytest installed

# Explanations
1. Chose PyTest because I had experience with it
2. Would normally do this in Postman as I also had experience with it
3. Made a folder containing all the py files; one file for the variables for reusability, and one file for the tests.
4. Utilized SWAPI to demonstrate the GET for a user. 

# Assumptions
1. Reviewer has Windows machine
2. Visual Studio Code is installed in Windows machine
3. Reviewer is having a good day, hopefully :)

# Installation Instructions
1. Open your IDE of choice. In this case, I chose Windows Visual Studio Code.
2. Install Python by following these instructions https://code.visualstudio.com/docs/python/python-tutorial
3. Open terminal.
4. Verify Python installtion has been successful by running `py -v` which should return installed Python version.
5. Install pip by running `py get-pip.py` in your terminal.
6. After installing pip, run `pip install pytest`.
7. After installing pytest, run `pip install requests`.
8. After successful install, clone this repo.

# Running the tests
1. In your terminal, go to the directory of /tests.
2. To run all tests, run `pytest` in the terminal. It should run all of the tests.
3. To run a single test file, capture the test file name and run `py <test_file_name>.py`. It should run the test file only.
4. To run all tests, run `pytest` in the directory /tests.
5. To see the test methods being run, run `pytest -v` for a verbose output. 
