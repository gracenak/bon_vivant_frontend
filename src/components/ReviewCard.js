import React from 'react'
import styled from "styled-components";

const ReviewCard = ({ review, handleDelete }) => {

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
            <DeleteBtn onClick={() => handleDelete(review)}>Delete</DeleteBtn>
        </Card>
    )
}

export default ReviewCard

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

const DeleteBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:17%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`