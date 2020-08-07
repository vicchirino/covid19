import React from "react"
import { formatNumber, numberWithCommas } from "../utils/helpers"

type SummaryGridProps = {
  totalConfirmed: number
  newConfirmed: number
  totalRecovered: number
  newRecovered: number
  totalDeaths: number
  newDeaths: number
}

const SummaryGrid = ({
  totalConfirmed,
  newConfirmed,
  totalRecovered,
  newRecovered,
  totalDeaths,
  newDeaths
}: SummaryGridProps) => {
  return (
      <div className="Summary-information-container">
        <div className="Summary-information">
          confirmed
          <div className="Summary-information-number">
           {numberWithCommas(totalConfirmed)}
          </div>
          <div className="Summary-information-newcases">
          {`+${formatNumber(newConfirmed)}`}
          </div>
       </div>
        <div className="Summary-information">
          recovered
          <div className="Summary-information-number">
            {numberWithCommas(totalRecovered)}
          </div>
          <div className="Summary-information-newcases">
          {`+${formatNumber(newRecovered)}`}
          </div>
        </div>
        <div className="Summary-information">
          death
          <div className="Summary-information-number">
            {numberWithCommas(totalDeaths)}
          </div>
          <div className="Summary-information-newcases">
          {`+${formatNumber(newDeaths)}`}
          </div>
        </div>
      </div>
  )

}

export default SummaryGrid