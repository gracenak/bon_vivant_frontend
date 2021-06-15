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
        // const ratingOptions=[5,4,3,2,1].map((score, index) => {
        //     <input type="radio" name="rating" value={score} onChange={() => console.log('selected:', score)} id={`rating-${score}`}/>
        // })
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <Field>
                        <input type="text" name="comment" placeholder="comment" value={this.state.comment} onChange={this.handleOnChange}/>
                    </Field>
                <RatingContainer>
                    <RatingLabel> Rate This Recipe</RatingLabel>
                    <Field>
                    <select name="rating" value={this.state.rating} onChange={this.handleOnChange}>
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                    </Field>
                    <Field>
                        <input type="radio" name="rating" value={this.state.rating} onChange={this.handleOnChange}/>
                        <Fieldset>
                        <span class="star-cb-group">
                            <input type="radio" id="rating-5" name="rating" value="5" /><Label for="rating-5">5</Label>
                            <input type="radio" id="rating-4" name="rating" value="4" checked="checked" /><label for="rating-4">4</label>
                            <input type="radio" id="rating-3" name="rating" value="3" /><Label for="rating-3">3</Label>
                            <input type="radio" id="rating-2" name="rating" value="2" /><Label for="rating-2">2</Label>
                            <input type="radio" id="rating-1" name="rating" value="1" /><Label for="rating-1">1</Label>
                            <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" /><Label for="rating-0">0</Label>
                        </span>
                        </Fieldset>
                    </Field>
                </RatingContainer>
                    <Field>
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleOnChange}/>
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

const Fieldset = styled.div `
    border: 0;
    width: 5em;
    border-radius: 1px;
    margin: 1em auto;
     
`
const Label = styled.div `
    display: inline-block
`