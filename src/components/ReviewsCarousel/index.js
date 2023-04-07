// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {i: 0}

  leftArrow = () => {
    const {i} = this.state

    const v = i - 1
    if (v >= 0) {
      this.setState(prevState => ({i: prevState.i - 1}))
    }
  }

  rightArrow = event => {
    const {reviewsList} = this.props

    const {i} = this.state
    const l = reviewsList.length
    const v = i + 1

    if (v < l) {
      this.setState(prevState => ({i: prevState.i + 1}))
    }
  }

  render() {
    const {i} = this.state
    const {reviewsList} = this.props
    const l = reviewsList.length

    return (
      <div className="bg-container">
        <h1 className="h1">Reviews</h1>
        <img
          src={reviewsList[i].imgUrl}
          alt={reviewsList[i].username}
          className="img1"
        />
        <div className="r1">
          <button
            className="btn"
            type="button"
            onClick={this.leftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="name">{reviewsList[i].username}</p>
          <button
            className="btn"
            type="button"
            onClick={this.rightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{reviewsList[i].companyName}</p>
        <p className="desc">{reviewsList[i].description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
