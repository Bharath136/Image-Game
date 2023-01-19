import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const onClickImg = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" className="tab-heading" onClick={onClickImg}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
