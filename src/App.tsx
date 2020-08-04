import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Summary from './Summary/Summary'
import Countries from './Conuntries/Countries'


export type Country = {
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
  const [newConfirmed, setNewConfirmed] = useState(0)
  const [newRecovered, setNewRecovered] = useState(0)
  const [newDeaths, setNewDeaths] = useState(0)
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
      setNewConfirmed(result.data.Global.NewConfirmed)
      setNewRecovered(result.data.Global.NewRecovered)
      setNewDeaths(result.data.Global.NewDeaths)
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
          newConfirmed={newConfirmed}
          newRecovered={newRecovered}
          newDeaths={newDeaths}
        />
      </div>
      <div className="Information">
        <Countries countries={sortedCountries} />
      </div>
    </div>
  );
}

export default App;
