import React, { Component } from "react";

import Search from "./components/Search";
import pic from '../src/img/weather-icons/mostlycloudy.svg';
import sunny from '../src/img/weather-icons/clear.svg';
import Head from './components/Header';//importing the header component
import Main from './components/Main';
import Footer from './components/Footer';

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Head />
      <Main data = {fakeWeatherData} />
      <Footer data = {fakeWeatherData} />



</div>
  
  );
}

export default App;