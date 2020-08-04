import React from "react"
import {Country} from "../App"
import { formatNumber } from "../utils/helpers"
import './Countries.css';

type CountriesProps = {
  countries: Country[]
}


const Countries = (props: CountriesProps) => {
  return(
    <div className="Countries">
    <div className="Countries-header">
        Countries
    </div>
      {
        props.countries.map((country: Country) => {
          return (
            <div key={`${country.Country}-container`} className="Country-container"> 
              <div className="Country-name">
                {`${country.Country}: `}
              </div>
              <div key={`${country.Country}-info`} className="Country-information">
                <div className="Country-information-confirmed">
                  {`${formatNumber(country.TotalConfirmed)}`}
                </div>
                <div className="Country-information-new">
                  {`+ ${formatNumber(country.NewConfirmed)}`}
                </div>
              </div>
            </div>
          )
        })
      }
  </div>
  )
}

export default Countries