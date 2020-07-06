import React from 'react'
import { Divider } from 'antd'
import StatisticsSummaryReport from './StatisticsSummaryReport'
import StatisticsLocationsReport from './StatisticsLocationsReport'

const StatisticsPanel = ({ orgId, timeframe }) => {
  return (
    <div>
      <StatisticsSummaryReport orgId={orgId} timeframe={timeframe} />
      <Divider />
      <StatisticsLocationsReport orgId={orgId} timeframe={timeframe} />
      <Divider />
    </div>
  )
}

export default StatisticsPanel
