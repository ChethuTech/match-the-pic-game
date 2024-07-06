import './index.css'

const TabItems = props => {
  const {tabDetails, activeTab, onTabActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onTabActiveTab(tabId)
  }

  return (
    <li className="tabs-list-container">
      <button
        onClick={onClickTab}
        className={`tabItem ${activeTab === tabId && 'active'}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
