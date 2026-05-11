import requests

city_name=input("Enter city name: \t")
url =f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=e7f1aee44f03703c906d8eb40a5460cd&units=metric"


response = requests.get(url)


if response.status_code == 200:

    data = response.json()
    city_temp = data["main"]["temp"]
    print(str(city_temp)+" c" )
    if city_temp>36:
        print(f"bahut garmi hai {city_name} may {city_temp} C")
else:
    print(f"Error: {response.status_code}")
