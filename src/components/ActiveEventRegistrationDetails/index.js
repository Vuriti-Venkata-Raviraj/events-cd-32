// Write your code here
import './index.css'

const statusResponses = {
  YET_TO_REGISTER: {
    name: 'YET_TO_REGISTER',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/events-register-img.png',
    alt: 'yet to register',
    description:
      'A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form.',
  },
  REGISTERED: {
    name: 'REGISTERED',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png',
    alt: 'registered',
    description: 'You have already registered for the event',
  },
  REGISTRATIONS_CLOSED: {
    name: 'REGISTRATIONS_CLOSED',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png',
    alt: 'registrations closed',
    title: 'Registrations Are Closed Now!',
    description: 'Stay tuned. We will reopen the registrations soon!',
  },
}
const ActiveEventRegistrationDetails = props => {
  const {active} = props
  const {registrationStatus} = active
  console.log(registrationStatus)

  const renderYetToRegister = () => (
    <div className="card">
      <img
        src={statusResponses.YET_TO_REGISTER.imgUrl}
        alt={statusResponses.YET_TO_REGISTER.alt}
        className="yetToRememberImg"
      />
      <p className="yetToRememberImg-para">
        {statusResponses.YET_TO_REGISTER.description}
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegister = () => (
    <div className="card">
      <img
        src={statusResponses.REGISTERED.imgUrl}
        alt={statusResponses.REGISTERED.alt}
        className="registeredImg"
      />
      <h1 className="already-registered">
        {statusResponses.REGISTERED.description}
      </h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="card">
      <img
        src={statusResponses.REGISTRATIONS_CLOSED.imgUrl}
        alt={statusResponses.REGISTRATIONS_CLOSED.alt}
        className="closedRegistrationsImg"
      />
      <h1 className="closed-title">
        {statusResponses.REGISTRATIONS_CLOSED.title}
      </h1>
      <p className="closed-para">
        {statusResponses.REGISTRATIONS_CLOSED.description}
      </p>
    </div>
  )

  const renderInitial = () => (
    <div className="card">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  switch (registrationStatus) {
    case statusResponses.YET_TO_REGISTER.name:
      return renderYetToRegister()

    case statusResponses.REGISTERED.name:
      return renderRegister()

    case statusResponses.REGISTRATIONS_CLOSED.name:
      return renderRegistrationsClosed()

    default:
      return renderInitial()
  }
}

export default ActiveEventRegistrationDetails
