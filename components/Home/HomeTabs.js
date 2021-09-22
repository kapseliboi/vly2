import { Tabs } from 'antd'
import { InboxOutlined, HistoryOutlined, SettingOutlined, FileSearchOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ProfilePanel } from '../VTheme/Profile'
import PersonalGoalSection from '../Goal/PersonalGoalSection'
import ActiveOpsSection from '../Op/ActiveOpsSection'
import InterestedOpsSection from '../Op/InterestedOpsSection'
import ArchivedOpsSection from '../Op/ArchivedOpsSection'
import ArchivedInterestedOpsSection from '../Op/ArchivedInterestedOpsSection'
import RecommendedOpsSection from '../Op/RecommendedOpsSection'
import EditablePersonPanel from '../../components/Person/EditablePersonPanel'

import VTabs from '../VTheme/VTabs'
const { TabPane } = Tabs

const homeActiveTab = (
  <>
    <InboxOutlined />
    <FormattedMessage
      id='home.tab.active'
      defaultMessage='Upcoming'
      description='show opportunities list on volunteer home page'
    />
  </>
)
const homeHistoryTab = (
  <>
    <HistoryOutlined />
    <FormattedMessage
      id='home.tab.history'
      defaultMessage='History'
      description='show volunteering history on volunteer home page'
    />
  </>
)
const homeProfileTab = (
  <>
    <SettingOutlined />
    <FormattedMessage
      id='home.tab.profile'
      defaultMessage='Profile'
      description='show profile on volunteer home page'
    />
  </>
)
const homeDiscoverTab = (
  <>
    <FileSearchOutlined />
    <FormattedMessage
      id='home.tab.discover'
      defaultMessage='Discover'
      description='tab to find new ops and recommendations'
    />
  </>
)

export const HomeTabs = ({ person, onChange, defaultTab }) =>
  <VTabs defaultActiveKey={defaultTab} onChange={onChange}>
    <TabPane tab={homeDiscoverTab} key='discover' style={{ overflow: 'visible' }}>
      <ProfilePanel>
        <PersonalGoalSection />
        <RecommendedOpsSection />
      </ProfilePanel>
    </TabPane>
    <TabPane tab={homeActiveTab} key='active' style={{ overflow: 'visible' }}>
      <ProfilePanel>

        <ActiveOpsSection />
        <InterestedOpsSection />
      </ProfilePanel>
    </TabPane>

    <TabPane tab={homeHistoryTab} key='history'>
      <ProfilePanel>
        <ArchivedOpsSection />
        <ArchivedInterestedOpsSection />
      </ProfilePanel>
    </TabPane>
    <TabPane tab={homeProfileTab} key='profile'>
      <ProfilePanel>
        <EditablePersonPanel person={person} />
      </ProfilePanel>
    </TabPane>
  </VTabs>

HomeTabs.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default HomeTabs
