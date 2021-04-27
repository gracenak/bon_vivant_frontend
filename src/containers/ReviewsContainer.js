import { Component } from 'react'
import ReviewInput from '../components/ReviewInput'
import ReviewList from '../components/ReviewList'

class ReviewsContainer extends Component {
    render() {
        return (
            <div>
                ReviewsContainer
                <ReviewInput recipe={this.props.recipe}/>
                <ReviewList reviews={this.props.recipe && this.props.recipe.reviews}/>
            </div>
        )
    }   
}

export default ReviewsContainer