# An example app demonstrating the Google Maps Javascript API

## Google maps developer
- [tutorial](https://developers.google.com/maps/documentation/javascript/tutorial)

## The API key
- Access requires that you [get a key](https://developers.google.com/maps/documentation/javascript/) from google.
- When prompted by this app enter the key which will be stored temporily in browser local storage.
- In a production app the key would be owned and served by the app website and protected by settings you configure while logged into the google [console](https://console.developers.google.com/).
 
## Startup url
- current features of this application are being served at the link:
  - /app/html/geolocation.html
  - From rawgit on branch ```develop_0.0.1-alpha.2```  [:link:](http://rawgit.com/Tacoma-JS/example-google-maps/develop_0.0.1-alpha.2/app/html/geolocation.html)

## Test URL
- Jasmine test specifications
  - /app/test/SpecRunner.html
  - From rawgit on branch ```develop_0.0.1-alpha.2```  [:link:](https://rawgit.com/Tacoma-JS/example-google-maps/develop_0.0.1-alpha.2/app/test/SpecRunner.html)

## Lessons learned
- When the current location is downloaded from a website like [ipinfo.io](https://ipinfo.io) based on the IP address of the local router it can be more random than you might guess.  For example, if the owner of a hot spot is a large corporation with the address registered to Somewhere USA, that address may be what is displayed rather than your actual location.
 
