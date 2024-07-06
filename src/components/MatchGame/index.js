import {Component} from 'react'
import NavBar from '../NavBar'
import TabsAndThumbnails from '../TabsAndThumbnails'

import GameOverCard from '../GameOverCard'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    timer: 60,
    showGameOver: false,
    displayRandomImageDetails: '',
  }

  componentDidMount() {
    const {imagesList} = this.props
    this.setState({displayRandomImageDetails: imagesList[0]})
    this.startTimer()
  }

  displayRandomImageDetails = () => {
    const {imagesList} = this.props
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    const randomImageDetails = imagesList[randomIndex]
    this.setState({displayRandomImageDetails: randomImageDetails})
    return randomImageDetails
  }

  onClickThumbnailz = thumbnailid => {
    // Comparing the ids of randomly displayed image and clicked thumbnail id
    const {displayRandomImageDetails} = this.state

    if (thumbnailid === displayRandomImageDetails.id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.displayRandomImageDetails()
    } else {
      this.gameOverTimeUp()
      this.setState({showGameOver: true})
    }
  }

  onClickPlayAgain = () => {
    this.displayRandomImageDetails()
    this.setState({score: 0, timer: 60, showGameOver: false})
    this.startTimer()
  }

  startTimer = () => {
    this.timerId = setInterval(
      () => this.setState(prevState => ({timer: prevState.timer - 1})),
      1000,
    )
  }

  gameOverTimeUp = () => {
    clearInterval(this.timerId)
  }

  showGameOver = () => {
    const {showGameOver, timer} = this.state
    let result = false
    if (showGameOver === true || timer === 0) {
      this.gameOverTimeUp()
      result = true
    }
    return result
  }

  render() {
    const {score, timer, showGameOver, displayRandomImageDetails} = this.state
    const {tabsList, imagesList} = this.props
    const {id, imageUrl, thumbnailUrl, category} = displayRandomImageDetails

    return (
      <div className="bg-container">
        <NavBar timer={timer} score={score} />
        {this.showGameOver() && (
          <GameOverCard
            onClickPlayAgain={this.onClickPlayAgain}
            score={score}
          />
        )}

        {!this.showGameOver() && (
          <div className="game-container">
            <div className="game-card">
              <img alt="match" className="match-img" src={imageUrl} />
              <TabsAndThumbnails
                onClickThumbnailz={this.onClickThumbnailz}
                tabsList={tabsList}
                imagesList={imagesList}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
