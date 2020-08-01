import React from "react"
import './Summary.css';

type SummaryProps = {
  totalConfirmed: number
  totalRecovered: number
  totalDeaths: number
}

const Summary = (props: SummaryProps) => {
  return(
    <div className="Summary-container">
    <div className="Summary-information" style={{color: "#E74C3C"}}>
      {`Total confirmed: ${props.totalConfirmed}`} 
    </div>
    <div className="Summary-information" style={{color: "#2ECC71"}}>
      {`Total recovered: ${props.totalRecovered}`} 
    </div>
    <div className="Summary-information" style={{color: "#424949"}}>
      {`Total death: ${props.totalDeaths}`} 
    </div>
  </div>
  )

}

export default Summary