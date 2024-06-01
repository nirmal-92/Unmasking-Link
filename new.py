import requests
import json


def check_url_safety(api_key, url):
    # Google Safe Browsing API endpoint
    api_url = "https://safebrowsing.googleapis.com/v4/threatMatches:find"

    # Request headers
    headers = {
        'Content-Type': 'application/json'
    }

    # Request body
    body = {
        "client": {
            "clientId": "yourcompanyname",
            "clientVersion": "1.0"
        },
        "threatInfo": {
            "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING"],
            "platformTypes": ["ANY_PLATFORM"],
            "threatEntryTypes": ["URL"],
            "threatEntries": [
                {"url": url}
            ]
        }
    }

    # Make the POST request
    response = requests.post(api_url, headers=headers, params={'key': api_key}, data=json.dumps(body))

    # Check the response
    if response.status_code == 200:
        result = response.json()
        if 'matches' in result:
            return False, result  # URL is unsafe
        else:
            return True, None  # URL is safe
    else:
        print("Error: Unable to check URL safety. Status Code:", response.status_code)
        return False, response.text


def main():
    api_key = "AIzaSyDaS7nN-rISBQIm1qvFDLJR1zw8cGpzhcs"  # Replace with your actual API key

    while True:
        url_to_check = input("Enter the URL to check (or 'exit' to quit): ")

        if url_to_check.lower() == 'exit':
            break

        is_safe, result = check_url_safety(api_key, url_to_check)

        if is_safe:
            print(f"The URL '{url_to_check}' is safe.")
        else:
            print(f"The URL '{url_to_check}' is unsafe. Details: {result}")


if __name__ == "__main__":
    main()
