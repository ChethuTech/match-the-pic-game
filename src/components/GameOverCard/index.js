import './index.css'

const GameOverCard = props => {
  const {score, onClickPlayAgain} = props
  const playAgain = () => {
    onClickPlayAgain()
  }
  return (
    <div className="game-over-bg-container">
      <div className="game-over-card-bg">
        <img
          className="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="score-heading"> YOUR SCORE</p>
        <h1 className="game-over-score"> {score} </h1>

        <button onClick={playAgain} className="play-again-btn">
          <div className="btn-text-container">
            <img
              className="reset-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </div>
        </button>
      </div>
    </div>
  )
}

export default GameOverCard
