/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/

const temperatures = [32, 35, 28, 40, 38, 30, 42];

//1) filter() temperatures above 35
const temperatureGreaterThan35=temperatures.filter((temperature)=>temperature>35)

//Print Temperature Values greater than 35
console.log("The Temperature Values greater than 35 is:",temperatureGreaterThan35)

//2) map() to convert all temperatures from Celsius → Fahrenheit
const farenheitTemperatures=temperatures.map((celsius)=>(celsius*1.8)+32)

//Print Temperature Values in Farenheit
console.log("The Temperatures Values after the temperatures after conversion from Celsius to Farenheit is:",farenheitTemperatures)

//3) reduce() to calculate average temperature
const sumOfTemperatures=temperatures.reduce((temperatureSum,temperature)=>temperatureSum+temperature)
const avgOfTemperatures=sumOfTemperatures/temperatures.length

//Print Average Temperature
console.log("The Average of Temperatures:",avgOfTemperatures)

//4) find() first temperature above 40
const findFirstTempAbove40=temperatures.find(temperature=>temperature>40)

//If Temperature Above 40 Exists
if(findFirstTempAbove40)
{
    //Print First Temperature above 40
    console.log("The First Temperature found above 40 is:",findFirstTempAbove40)
}
//If Temperature Above 40 does not exist
else
{
    //Print not exist
    console.log("Temperature Above 40 does not exist")
}

//5) findIndex() of temperature 28
const findIndexOfTemperature28=temperatures.findIndex(temperature=>temperature===28)

//If Temperature 28 Exists
if(findIndexOfTemperature28!=-1)
{
    //Print Index of temperature 28
    console.log("The Index of Temperature 28:",findIndexOfTemperature28)
}
//If Temperature 28 Does not exist
else
{
    console.log("Temperature with 28 Degrees does not exist")
}
