// Write your code here
import './index.css'

const EventItem = props => {
  const {events, selected} = props
  const {id, imageUrl, name, location} = events

  const select = () => {
    selected(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="select-btn" onClick={select}>
        <img src={imageUrl} className="event-img" alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
