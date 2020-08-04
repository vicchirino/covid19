import React from "react"
import { formatNumber } from "../utils/helpers"

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
          Confirmed
          <div className="Summary-information-number">
           {formatNumber(totalConfirmed)}
          </div>
          <div className="Summary-information-newcases">
          {`+ ${formatNumber(newConfirmed)}`}
          </div>
       </div>
        <div className="Summary-information">
          Recovered
          <div className="Summary-information-number">
            {formatNumber(totalRecovered)}
          </div>
          <div className="Summary-information-newcases">
          {`+ ${formatNumber(newRecovered)}`}
          </div>
        </div>
        <div className="Summary-information">
          Death
          <div className="Summary-information-number">
            {formatNumber(totalDeaths)}
          </div>
          <div className="Summary-information-newcases">
          {`+ ${formatNumber(newDeaths)}`}
          </div>
        </div>
      </div>
  )

}

export default SummaryGrid