import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Summary from './Summary/Summary'


type Country = {
  Country: string
  CountryCode: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
  Date: string
}


type SummaryResponse = {
  Global: {
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
  }
  Countries?: Country[]
}

function App() {

  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [totalRecovered, setTotalRecovered] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [countries, setCountries] = useState([])

  const isLoading = totalConfirmed === 0 && totalRecovered === 0 && totalDeaths === 0

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.covid19api.com/summary',
      )        
      console.log("resukt", result.data)
      setTotalConfirmed(result.data.Global.TotalConfirmed)
      setTotalRecovered(result.data.Global.TotalRecovered)
      setTotalDeaths(result.data.Global.TotalDeaths)
      setCountries(result.data.Countries)
    }   
    fetchData()
   }, []);

   if (isLoading) {
      return <div>"Loading.."</div>
   }

   // Sort array by total confirmed cases
   const sortedCountries = countries.sort((a: Country, b: Country) => {
      return b.TotalConfirmed - a.TotalConfirmed
   })

  return (
    <div className="App">

      <div className="Header" >
      <Summary 
        totalConfirmed={totalConfirmed}
        totalDeaths={totalDeaths}
        totalRecovered={totalRecovered}
      />

      </div>

      
      <div className="Countries">
        <div className="Countries-header">
            Countries
        </div>
    
          {
            sortedCountries.map((country: Country) => {
              return (
                <div key={`${country}-container`} className="Country-container"> 
                  <div key={`${country}-info`} className="Country-information">
                    {`${country.Country} - Total Cases ${country.TotalConfirmed}`}
                  </div>
                </div>
              )
            })
          }
      </div>

    </div>
  );
}

export default App;
