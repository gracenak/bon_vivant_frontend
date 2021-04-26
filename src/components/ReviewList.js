import React from 'react'

const ReviewList = (props) => {
    console.log(props)
    debugger
    return(
        <div>
            {props.reviews && props.reviews.map(review =>
                <li key={review.id}>{review.comment}-{review.rating}</li>)}
        </div>
    )
}

export default ReviewList

