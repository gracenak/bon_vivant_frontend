import React from 'react'
import styled from "styled-components";

const ReviewCard = ({ review }) => {

    return (
        <Card>
        <ReviewContainer>
            <ReviewRating>
                {review.rating} Stars
            </ReviewRating>
        </ReviewContainer>
            <ReviewAuthor>
            {review.username} says:
            </ReviewAuthor><br></br>
            <ReviewComment>
                {review.comment}
            </ReviewComment>
        </Card>
    )
}

export default ReviewCard

/* <button onClick={() => handleOnDelete(review)}> Delete</button> */

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

const ReviewComment = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const ReviewRating = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 18px;
`
const ReviewAuthor = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 15px;
`