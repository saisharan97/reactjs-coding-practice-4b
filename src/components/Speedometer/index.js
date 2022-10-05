// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed <= 190) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecelerate = () => {
    const {speed} = this.state
    if (speed >= 10) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="background-container">
        <h1>SPEEDOMETER</h1>
        <img
          alt="speedometer"
          className="img-prop"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            style={{'background-color': ' #007bff', color: ' #ffffff'}}
            className="button"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            style={{
              'background-color': ' #07080c',
              color: ' #94a3b8',
              'border-style': 'solid',
              'border-width': '1px',
              'border-color': '#94a3b8',
            }}
            className="button"
            type="button"
            onClick={this.onDecelerate}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
