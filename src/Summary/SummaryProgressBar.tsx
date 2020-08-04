import React from "react"

type SummaryProgressBarProps = {
  totalConfirmed: number
  totalRecovered: number
  totalDeaths: number
}

const SummaryProgressBar = ({totalConfirmed, totalRecovered, totalDeaths}: SummaryProgressBarProps) => {

  const total = totalConfirmed + totalRecovered + totalDeaths
  const confirmedPercentage = totalConfirmed/total * 100
  const recoveredPercentage = totalRecovered/total * 100
  const deathsPercentage = totalDeaths/total * 100
  

  return (
    <div className="SummaryProgressBar">
    <div className="SummaryProgressBar-container">
      <div className="SummaryProgressBar-confirmed" style={{width: `${confirmedPercentage}%`}}>
        {/* {`${Math.round(confirmedPercentage * 100) / 100}%`} */}
      </div>
      <div className="SummaryProgressBar-recovered" style={{width: `${recoveredPercentage}%`}}>
        {/* {`${Math.round(recoveredPercentage * 100) / 100}%`} */}
      </div>        
      <div className="SummaryProgressBar-deaths" style={{width: `${deathsPercentage}%`}}>
        {/* {`${Math.round(deathsPercentage * 100) / 100}%`} */}
      </div>
    </div>
  </div>
  )
}

export default SummaryProgressBar