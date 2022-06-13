// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  textCount = event => this.setState({count: event.target.value.length})

  render() {
    const {count} = this.state
    return (
      <div className="page-container">
        <div className="text-container">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="text">Enter the phrase</label>
          <input
            type="text"
            id="text"
            onChange={this.textCount}
            placeholder="Enter the phrase"
          />
          <p className="count-text">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
          className="image-card"
        />
      </div>
    )
  }
}

export default LettersCalculator
