import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 18px;
  img {
      box-sizing: border-box;
      width: 270px;
      height: 380px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold; 
  padding: 10px 0;
`

const Header = (props) => {
    console.log(props)
    const { title, img, avg_rating, cook_time, ingredients, directions } = props.recipe || ''
    const total = props.recipe.reviews.length 

    return (
        <Wrapper>
            <h1>{title}</h1> 
            <img src={img} alt={title} />


            <div>
                <TotalReviews>
                    {total} User Reviews
                </TotalReviews>
                <div className="starRating">
                    
                </div>
                <TotalOutOf>
                    {avg_rating} out of 5
                </TotalOutOf>
            </div>
            <div className="recipe-container">
            <h3>Total Time:</h3>
                {cook_time}
            <h3>Ingredients:</h3>
                {ingredients}
            <h3>Directions:</h3>
                {directions}

            </div>
        </Wrapper>
    )
}

export default Header