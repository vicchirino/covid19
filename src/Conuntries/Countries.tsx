import React from "react"
import { Country } from "../model/Country"
import { formatNumber, numberWithCommas } from "../utils/helpers"
import SummaryProgressBar from "../Summary/SummaryProgressBar";
import './Countries.css';

type CountriesProps = {
  countries: Country[]
}

const Countries = (props: CountriesProps) => {
  return(
    <div className="Countries">
    <div className="Countries-header">
      Situation by countries
    </div>
      {
        props.countries.map((country: Country) => {
          return (
            <div key={`${country.Country}-container`} className="Country-container"> 
              <div
                key={`${country.Country}-chart-cell`}
                className="Country-cell"
                style={{width: "70%", alignItems: "flex-start"}}
                >
                <div className="Country-name">
                  {`${country.Country}`}
                </div>
                <SummaryProgressBar
                  key={`${country.Country}-progress-bar`}
                  totalRecovered={country.TotalRecovered}
                  totalDeaths={country.TotalDeaths}
                  totalConfirmed={country.TotalConfirmed}
                />
              </div>
              <div
                key={`${country.Country}-info-cell`}
                className="Country-cell"
                style={{width: "30%", alignItems: "flex-end"}}>
                <div className="Country-information-confirmed">
                  {`${numberWithCommas(country.TotalConfirmed)}`}
                </div>
                <div className="Country-information-new">
                  {`+${formatNumber(country.NewConfirmed)}`}
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