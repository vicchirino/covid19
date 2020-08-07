import React from "react"
import './Summary.css';
import SummaryProgressBar from "./SummaryProgressBar";
import SummaryGrid from "./SummaryGrid";

type SummaryProps = {
  totalConfirmed: number
  totalRecovered: number
  totalDeaths: number
  newConfirmed: number
  newRecovered: number
  newDeaths: number
}

const Summary = ({
  totalConfirmed,
  totalRecovered,
  totalDeaths,
  newConfirmed,
  newRecovered,
  newDeaths
}: SummaryProps) => {


  return(
    <div className="Summary-container">
      <div className="Summary-title">
         Global Situation
      </div>
      <SummaryGrid 
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        totalConfirmed={totalConfirmed}
        newConfirmed={newConfirmed}
        newDeaths={newDeaths}
        newRecovered={newRecovered}
      />
      <SummaryProgressBar
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        totalConfirmed={totalConfirmed}
        />
    </div>
  )

}

export default Summary