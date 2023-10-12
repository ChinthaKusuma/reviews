// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count,
      }))
    }
  }

  rightArrow = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count,
      }))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const list2 = reviewsList[count]
    console.log(list2)
    const {imgUrl, username, companyName, description} = list2

    return (
      <div className="bgContainer">
        <div className="bgContainer1">
          <h1 className="heading">Review</h1>
          <img src={imgUrl} alt="one" />
          <div className="one">
            <button className="btn1" type="button" onClick={this.leftArrow}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="img2"
                alt="left arrow"
              />
            </button>
            <h1 className="heading">{username}</h1>
            <button className="btn1" type="button" onClick={this.rightArrow}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="img2"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="para">{companyName}</p>
          <p className="para">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
