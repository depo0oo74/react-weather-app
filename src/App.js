// import axios from 'axios'
import React, { Component } from 'react'

import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'bc4f20d5a7c23a6e726c2f90b4014fea'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputCity : '' ,
      data : {
        temprature : '' ,
        cityName : '' ,
        CountryName : '' ,
        description : '' ,
        windSpeed : ''
      } ,
      errorMessage : ''
    }
  }

  handleChange = e => {
    this.setState({
      inputCity : e.target.value ,
    })
  }


  getWeather = async e => {
    e.preventDefault()
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputCity}&appid=${API_KEY}`)
    const data = await api.json()
    console.log(data)
    if (data.cod === 200) {
      this.setState({
        inputCity : '' ,
        data : {
          temprature : data.main.temp ,
          cityName : data.name ,
          CountryName : data.sys.country ,
          description : data.weather[0].description ,
          windSpeed : data.wind.speed
        } ,
        errorMessage : ''
      })
    } else {
      this.setState({
        inputCity : '' ,
        data : {
          temprature : '' ,
          cityName : '' ,
          CountryName : '' ,
          description : '' ,
          windSpeed : ''
        } ,
        errorMessage : 'City name not correct'
      })
    }
    
  }



  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} handleChange={this.handleChange} inputCity={this.state.inputCity} />
        <Weather 
        CountryName={this.state.data.CountryName} 
        cityName = {this.state.data.cityName}
        temprature = {this.state.data.temprature}
        description = {this.state.data.description}
        windSpeed = {this.state.data.windSpeed}
        errorMessage = {this.state.errorMessage}
        />
      </div>
    )
  }
}

export default App
