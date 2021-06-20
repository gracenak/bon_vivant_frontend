import { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../actions/addReview'
import styled from "styled-components";
// import StarRatings from 'react-star-ratings'

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
                        {/* <input type="radio" name="rating" value={this.state.rating} onChange={this.handleOnChange}/> */}
                        <Fieldset>
                        {/* <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          onChange={this.handleOnChange}
          numberOfStars={5}
          name='rating'
        /> */}
                        <RatingBox>
                        <label class="radio-inline">
                            <input type="radio" id="rating-5" name="rating" value="5" />
                        </label>
                        <label class="radio-inline">
                            <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
                        </label>
                        <label class="radio-inline">
                            <input type="radio" id="rating-3" name="rating" value="3" />
                        </label>
                        <label class="radio-inline">
                            <input type="radio" id="rating-2" name="rating" value="2" />
                        </label>
                         <label class="radio-inline">
                            <input type="radio" id="rating-1" name="rating" value="1" />
                        </label>
                        {/* </span> */}
                        </RatingBox>
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


const RatingBox = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;
  input { display: none; }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: .3s;
  }
  input:checked ~ label, input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
`

