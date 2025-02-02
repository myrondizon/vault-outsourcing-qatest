from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from config import load_config

def test_login():
    # Load configuration
    config = load_config()
    credentials = config['credentials']
    
    # Set up Chrome options
    options = Options()
    options.add_argument("--headless")
    
    # Initialize the driver
    driver = webdriver.Chrome(service=Service(), options=options)
    
    try:
        # Navigate to the login page
        driver.get(config['base_url'] + "/login")
        
        # Wait for elements to be present and interact with them
        wait = WebDriverWait(driver, config['timeout'])
        
        email_input = wait.until(EC.presence_of_element_located((By.ID, "email_input")))
        email_input.send_keys(credentials['email'])
        
        password_input = wait.until(EC.presence_of_element_located((By.ID, "password_input")))
        password_input.send_keys(credentials['password'])
        
        login_button = wait.until(EC.element_to_be_clickable((By.ID, "loginButton")))
        login_button.click()
        
        success_message = wait.until(EC.presence_of_element_located((By.ID, "successMessage"))).text
        assert success_message == "Welcome. Login successful!"
        
    finally:
        driver.quit()

if __name__ == "__main__":
    test_login()