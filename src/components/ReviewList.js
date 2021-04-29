import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/deleteReview'
import styled from "styled-components";
import ReviewCard from './ReviewCard'

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ReviewList = ({ reviews }) => {
    console.log(reviews)

    const reviewCard = reviews != null && reviews.length > 0 ? reviews.map(review => <ReviewCard key={review.id} review={review}/>) : null


    const handleOnDelete = (review) => {
        debugger
        reviews.deleteReview(review)
    }

    return(
        <Card>
            <RatingContainer>
                {reviewCard}
            </RatingContainer> 
        </Card>
    )
}

export default connect(null, { deleteReview })(ReviewList)

{/* <li key={review.id}>{review.comment}-{review.rating} <button onClick={() => handleOnDelete(review)}> Delete</button></li>)} */}

{/* <button onClick={() => handleOnDelete(review)}> Delete</button> */}

