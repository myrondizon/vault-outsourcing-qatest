import pytest, requests, json
from variables import BASE_URL, PEOPLE, PEOPLE_ID, PEOPLE_NAME, PEOPLE_HEIGHT

def test_URL_returns_200():
    url = f"{BASE_URL}/{PEOPLE}"
    response = requests.get(url)

    assert response.status_code == 200, f"Expected status code 200, but got {response.status_code}"
    # assert that length of json response only contains 10 names

    try:
        response_json = response.json()  # Store the JSON as a variable
        pretty_json = json.dumps(response_json, indent=4)  # Prettify the JSON
        print(pretty_json) # Print the pretty JSON

    except ValueError:
        pytest.fail("Response is not in JSON format")

def test_retrieve_existing_user():
    url = f"{BASE_URL}/{PEOPLE}/{PEOPLE_ID}"
    response = requests.get(url)

    assert response.status_code == 200, f"Expected status code 200, but got {response.status_code}"

    try:
        response_json = response.json()

        # assert user_id to be equal to PEOPLE_ID
        # but SWAPI doesn't have that in its JSON reponse :(

        assert "name" in response_json, "The 'name' property is missing from the JSON response."
        assert response_json["name"] == PEOPLE_NAME, f"Expected name '{PEOPLE_NAME}', but got '{response_json['name']}'"

        assert "height" in response_json, "The 'height' property is missing from the JSON response."
        assert response_json["height"] == PEOPLE_HEIGHT, f"Expected height '{PEOPLE_HEIGHT}', but got '{response_json['height']}'"

    except (ValueError, KeyError) as e:  # Handle JSON decoding or key errors
        pytest.fail(f"Error processing JSON response: {e}. Response text: {response.text}") # Include raw response text for debugging
        print("Response Text:", response.text) # Print the raw response for debugging

def test_throw_404_users_not_existing():
    url1 = f"{BASE_URL}/{PEOPLE}/0"
    response = requests.get(url1)
    assert response.status_code == 404, f"Expected status code 404, but got {response.status_code}"

    url2 = f"{BASE_URL}/{PEOPLE}/-1"
    response = requests.get(url2)
    assert response.status_code == 404, f"Expected status code 404, but got {response.status_code}"

    url3 = f"{BASE_URL}/{PEOPLE}/84"
    response = requests.get(url2)
    assert response.status_code == 404, f"Expected status code 404, but got {response.status_code}"