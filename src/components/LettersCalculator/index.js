import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length

    return (
      <div className="main-container">
        <div className="left-section">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-label">
            Enter the phrase
            <input
              type="text"
              className="input"
              value={searchInput}
              onChange={this.onChangeInputValue}
              placeholder="Enter the phrase"
            />
          </label>
          <p className="count-text">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
