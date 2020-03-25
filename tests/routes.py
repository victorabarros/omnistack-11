import requests

BASE_URL = "http://localhost:3333"

def test_home():
    return requests.get(url=f"{BASE_URL}/")

def test_insert_ong():
    return requests.post(url=f"{BASE_URL}/ongs",
                         json={'name': 'vab',
                              'city': 'Rio'})

if __name__ == "__main__":
    print(test_home())
    print(test_insert_ong())
