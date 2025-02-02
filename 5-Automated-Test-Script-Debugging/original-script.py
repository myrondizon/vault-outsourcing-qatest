from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

def test_login():
    options = Options()
    options.add_argument("--headless")

    driver = webdriver.Chrome(service=Service(), options=options)

    driver.get("http://example.com/login")
    driver.find_element(By.ID, "email_input").send_keys("test@example.com")
    driver.find_element(By.ID, "password_input").send_keys("password123")

    driver.find_element(By.ID, "loginButton")

    success_message = driver.find_element(By.ID, "successMessage").text
    assert success_message == "Welcome!", "Login failed"

    driver.quit()

if __name__ == "__main__":
    test_login()