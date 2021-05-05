import { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../actions/addReview'
import styled from "styled-components";

class ReviewInput extends Component {

    state = {
        comment: '',
        rating: '5',
        username: '',
        recipe_id: this.props.recipeId
    }
    
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
            recipe_id: this.props.recipeId
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addReview(this.state, this.props.recipe.id)
        this.setState({
            comment: '',
            rating: '5',
            username: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <Field>
                        <input type="text" name="comment" placeholder="comment" value={this.state.comment || ''} onChange={this.handleOnChange}/>
                    </Field>
                <RatingContainer>
                    <RatingLabel> Rate This Recipe</RatingLabel>
                    <Field>
                    <select name="rating" value={this.state.rating || '5'} onChange={this.handleOnChange}>
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                    </Field>
                </RatingContainer>
                    <Field>
                        <input type="text" name="username" placeholder="Username" value={this.state.username || ''} onChange={this.handleOnChange}/>
                    </Field>
                    <SubmitBtn type="submit">Create A Review</SubmitBtn>
                </form>
            </div>
        )
    }
}

export default connect(null, { addReview })(ReviewInput) 

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:40px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size:20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding:20px;
  background: #fff;
`
const RatingLabel = styled.div`
  text-align: center;
  font-size:18px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`