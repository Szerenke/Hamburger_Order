let weatherWidget = {
    weathers: [{
        dayNumber: 0,
        temperature: -11.2
    },
    {
        dayNumber: 1,
        temperature: 1.4
    },
    {
        dayNumber: 2,
        temperature: 26.3
    },
    {
        dayNumber: 3,
        temperature: -4.3
    },
    {
        dayNumber: 4,
        temperature: 15.1
    },
    {
        dayNumber: 5,
        temperature: 24.8
    },
    {
        dayNumber: 6,
        temperature: 31.6
    }
    ],
    offers: [{
        upperLimit: 0,
        offerMessage: "Ma forró csoki az ajánlat"
    },
    {
        upperLimit: 15,
        offerMessage: "Ma tea az ajánlat"
    },
    {
        upperLimit: 20,
        offerMessage: "Ma süti az ajánlat"
    },
    {
        upperLimit: 25,
        offerMessage: "Ma fagyi az ajánlat"
    },
    {
        upperLimit: 50,
        offerMessage: "Ma hideg limonádé az ajánlat"
    }]
}
let mintemp = document.querySelector("span.min-temp");
let maxtemp = document.querySelector("span.max-temp");
let avgtemp = document.querySelector("span.avg-temp");


function showWidget() {
    let temperatureDiv = document.querySelector("span.temp");
    let dailyOffer = document.querySelector("span.daily-offer");
    let fahrenheit = document.querySelector("#fahrenheit:checked");
    if (fahrenheit) {
        temperatureDiv.innerHTML = fahrenheitConversion(getDaytemperature()) + " °F";
    } else {
        temperatureDiv.innerHTML = getDaytemperature() + " °C";
    }
    dailyOffer.innerHTML = getDailyOffer();
}

function getDaytemperature() {
    let day = document.querySelector("#day").value;
    let temp = 0;

    for (let k in weatherWidget.weathers) {
        if (day == weatherWidget.weathers[k].dayNumber) {
            temp = weatherWidget.weathers[k].temperature;
            return temp;
        }
    }
}

function getDailyOffer() {
    for (let i = 0; i < weatherWidget.offers.length; i++) {
        for (let k in weatherWidget.offers) {
            if (getDaytemperature() <= weatherWidget.offers[k].upperLimit) {
                offer = weatherWidget.offers[k].offerMessage;
                return offer;
            }
        }
    }
}

function loadStatistics() {
    //let celsius = document.querySelector("#celsius:checked");
    let fahrenheit = document.querySelector("#fahrenheit:checked");
    if(fahrenheit) {
        StatisticsFahrenheit()
    } else {
        StatisticsCelsius()
    }
}

function StatisticsCelsius() {
    mintemp.innerHTML = "heti minimum: " + temperatureMin() + " °C";
    maxtemp.innerHTML = "heti maximum: " + temperatureMax() + " °C";
    avgtemp.innerHTML = "heti átlag: " + temperatureAvg().toFixed(1) + " °C";   
}

function StatisticsFahrenheit() {
    mintemp.innerHTML = "heti minimum: " + fahrenheitConversion(temperatureMin()) + " °F";
    maxtemp.innerHTML = "heti maximum: " + fahrenheitConversion(temperatureMax()).toFixed(1) + " °F";
    avgtemp.innerHTML = "heti átlag: " + fahrenheitConversion(temperatureAvg()).toFixed(1) + " °F";
}


    /*if(celsius) {
        mintemp.innerHTML = "heti minimum: " + temperatureMin() + " °C";
        maxtemp.innerHTML = "heti maximum: " + temperatureMax() + " °C";
        avgtemp.innerHTML = "heti átlag: " + temperatureAvg().toFixed(1) + " °C";        
    } else if(fahrenheit) {
        mintemp.innerHTML = "heti minimum: " + fahrenheitConversion(temperatureMin()) + " °F";
        maxtemp.innerHTML = "heti maximum: " + fahrenheitConversion(temperatureMax()) + " °F";
        avgtemp.innerHTML = "heti átlag: " + fahrenheitConversion(temperatureAvg()).toFixed(1) + " °F";
    }*/


function temperatureMin() {
    let min = 50;
    for (let k in weatherWidget.weathers) {
        if (weatherWidget.weathers[k].temperature < min) {
            min = weatherWidget.weathers[k].temperature;
        }
    }
    return min;
}

function temperatureMax() {
    let max = 0;
    for (let k in weatherWidget.weathers) {
        if (weatherWidget.weathers[k].temperature > max) {
            max = weatherWidget.weathers[k].temperature;
        }
    }
    return max;
}

function temperatureAvg() {
    let sum = 0;
    for (i = 0; i < weatherWidget.weathers.length; i++) {
        sum += weatherWidget.weathers[i].temperature;
    }
    return avg = weatherWidget.weathers.length != 0 ? sum / weatherWidget.weathers.length : 0;
}

function fahrenheitConversion(data) {
    let fahr = data * 1.8 + 32;
    return fahr;
}
