var tz = require('https://github.com/sneha096/snehaweather/blob/main/timeZone.js');

process.on('message', (cityName)=>{
        process.send(JSON.parse(JSON.stringify(tz.timeForOneCity(cityName))));
});
