# Metro-Lisboa

This is a wrapper for some of the Metro-Lisboa WEBAPI. Please feel free to contribute! :)

## Installation
    npm install metro-lisboa


Get Token [here](https://api.metrolisboa.pt/store/apis/info?name=EstadoServicoML&version=1.0.1)

## Example
```javascript
  const Metro = require("metro-lisboa");
  const metro = new Metro("TOKEN");

  //OD => Odivelas
  metro.getStationWaitingTime("OD").then(station => {
      // do anything with station response :)
  });
```

## Available functions

getRedLineWaitingTime  
getYellowLineWaitingTime  
getGreenLineWaitingTime  
getBlueLineWaitingTime  
getRedLineStatus  
getYellowStatus  
getGreenStatus  
getBlueLineStatus  
getStationInfo (station parameter id is mandatory)  
getStationWaitingTime (station parameter id is mandatory)  

.