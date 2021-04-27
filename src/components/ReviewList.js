import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/deleteReview'

const ReviewList = (props) => {
    console.log(props.reviews)

    const handleOnDelete = (review) => {
        debugger
        props.deleteReview(review.id, review.recipe_id)
    }

    return(
        <div>
            {props.reviews && props.reviews.map(review =>
                <li key={review.id}>{review.comment}-{review.rating} <button onClick={() => handleOnDelete(review)}> Delete</button></li>)}
        </div>
    )
}

export default connect(null, { deleteReview })(ReviewList)

