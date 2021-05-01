import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/deleteReview'
import styled from "styled-components";
import ReviewCard from './ReviewCard'

const ReviewList = ({ reviews }) => {

    const reviewCard = reviews != null && reviews.length > 0 ? reviews.map(review => 
        <ReviewCard key={review.id} review={review}  /> ) : null

    return(
        <RatingGrid>
            <ReviewsHeader>{reviews && reviews.length} Reviews</ReviewsHeader>
                {reviewCard}
        </RatingGrid> 
    )
}
/* <button onClick={() => handleOnDelete(review)}> Delete</button> */

export default connect(null, { deleteReview })(ReviewList)

const RatingGrid = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

const ReviewsHeader = styled.div`
  text-align: center;
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`
