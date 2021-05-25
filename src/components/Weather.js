import React from 'react'

function Weather(props) {
    return (
        <div>
            {
                props.CountryName && <p>Country : {props.CountryName}</p>
            }
            {
                props.cityName && <p>City : {props.cityName}</p>
            }
            {
                props.temprature && <p>Temprature : {Math.ceil(props.temprature  - 273.15)}<sup>o</sup>C</p>
            }
            {
                props.description && <p>Description : {props.description}</p>
            }
            {
                props.windSpeed && <p>Wind Speed : {props.windSpeed}</p>
            }
            {
                props.errorMessage && <p>{props.errorMessage}</p>
            }
        </div>
    )
}

export default Weather
