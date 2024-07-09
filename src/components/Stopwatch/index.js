// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  onUnmount = () => {
    clearInterval(this.timerInterval)
  }

  onReset = () => {
    clearInterval(this.timerInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStop = () => {
    clearInterval(this.timerInterval)
    this.setState({isTimerRunning: false})
  }

  onUpdate = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.timerInterval = setInterval(this.onUpdate, 1000)
    this.setState({isTimerRunning: true})
  }

  onRenderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = timeElapsedInSeconds % 60
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onRenderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.onRenderMinutes()}:${this.onRenderSeconds()}`
    console.log(time)
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="container2">
          <div className="inner-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <div className="functionsContainer">
            <button
              type="button"
              className="btn1"
              onClick={this.onClickStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button type="button" className="btn2" onClick={this.onStop}>
              Stop
            </button>
            <button type="button" className="btn3" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
