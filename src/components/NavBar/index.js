import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <ul className="nav-list-container">
        <li className="website-logo-li">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </li>

        <li>
          <p className="score">
            Score: <span>{score}</span>
          </p>
        </li>
        <li>
          <img
            className="timer-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
        </li>
        <li>
          <p className="timer">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
