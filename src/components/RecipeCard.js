import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const RecipeCard = (props) => {
    return (
        <Card>
            <RecipeTitle>
                {props.attributes.title}
            </RecipeTitle>
            <RecipeImg>
                <img src={props.attributes.img} alt={props.attributes.title} />
            </RecipeImg>
            <div className="recipe-rating">
                {props.attributes.avg_rating}
            </div>
            <LinkWrapper>
              <Link to={`/recipes/${props.attributes.slug}`}>View Recipe </Link>
            </LinkWrapper>
        </Card>
    )
}

export default RecipeCard

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center
`;

const RecipeImg = styled.div`
  height: 50px;
  img {
    height: 50px;
    width: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    text-align: center
  }
`

const RecipeTitle = styled.div`
  padding: 20px 0 10px 0
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
  a {
      color: #fff;
      background: #000;
      border-radius: 4px;
      padding: 10px 50px;
      border: 1px solid #000;
      width: 100%;
      text-decoration: none;
  }
`;