// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const buttonClassName = isActive ? 'active-button' : ''

  return (
    <li className="list-container">
      <button
        className={`button ${buttonClassName}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
