import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const ActiveButton = isActive ? 'active-tab-btn' : ''

  const UpadateTab = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${ActiveButton}`}
        onClick={UpadateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
