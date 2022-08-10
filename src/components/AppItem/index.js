// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <>
      <li className="card-container">
        <img src={imageUrl} alt={appName} className="image" />
        <p className="text">{appName}</p>
      </li>
    </>
  )
}
export default AppItem
