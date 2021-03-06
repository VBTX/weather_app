import React from 'react';
import moment from 'moment'


const DailyForecast = ({forecast}) => {
	const renderForecasts = forecast.map(({apparentTemperatureMax, apparentTemperatureMin, humidity, precipProbability, summary, sunriseTime, sunsetTime, temperatureMax, temperatureMin, time} , index) =>
		
		<div key={index} style={{border: 'solid 2px red', padding: '16px', margin: '16px', width:'200px', display:'inline-block'}}>
		<h4>{moment.unix(time).format('LL')}</h4>
		<p> Sunrise: {moment.unix(sunriseTime).format('LT')}, Sunset: {moment.unix(sunsetTime).format('LT')}</p>
		<p>Temperature: <br/>Max {Math.round(temperatureMax)} Min {Math.round(temperatureMin)}</p>
		<p>Feels Like: <br/> Max {Math.round(apparentTemperatureMax)} Min {Math.round(apparentTemperatureMin)}</p>
		<p>Chance of Percipitation: <br/>{precipProbability}</p>
		<p>Humidity: {humidity}</p>
		</div>
)
 return (
 	<div><br/><h2>Daily Forecast</h2>
 	{renderForecasts.slice(0,6)}
 	</div>)
}
export default DailyForecast;
