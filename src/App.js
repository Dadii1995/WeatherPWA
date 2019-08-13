import React, { useContext } from 'react'
import logo from './logo.svg'
import './App.css'

import { WeatherContext } from './contexts/WeatherContext'

function App() {
  const context = useContext(WeatherContext)
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            context.getWeather('Bielsko-Biała')
          }}
        >
          Weather
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
