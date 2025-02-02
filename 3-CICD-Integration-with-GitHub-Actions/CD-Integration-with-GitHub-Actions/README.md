**Scenario:**
Our team is implementing a new feature that will be deployed frequently. The feature is complex and integrates with multiple existing modules in the application. We need to ensure that the automated tests are part of the CI/CD pipeline to catch issues early and maintain platform stability during deployments. 

**Task:**
Create a GitHub Actions workflow file (.github/workflows/test.yml) that: 
1. Sets up the environment (e.g., installs dependencies). 
2. Runs the automated test scripts from Case Study 1 and Case Study 2 against a mock environment. 
3. Outputs the test results in the GitHub Actions logs. 
4. Uploads any screenshots or artifacts generated during the tests as GitHub Action artifacts. 

Assume that the tests will be executed against a mock environment and mock responses for the relevant API calls. Additionally, describe how you would handle test failures in the workflow, including retry strategies and team notifications (e.g., via Slack or email).

Provide setup instructions in the README.md on how to run the GitHub Action locally (Optional). 

===============

Explanation:
1. Assumed test environment is https://stg.environment.io
2. If tests are on queue, there should be a message of the list of pull requests(?) to be released.
3. If tests are going through staging, there should be a notification message in the CI/CD interface (like Jenkins) and/or a message from the bot in the development teams' channel.
4. If tests pass, then go to next stage and release to production.
5. If tests fail, job should stop and team members should fix the broken tests and start another CI/CD job again. 