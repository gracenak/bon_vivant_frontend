import { Component } from 'react'
import { connect } from 'react-redux'
import { editRecipe } from '../actions/editRecipe'
import styled from "styled-components";
class RecipeEdit extends Component {
    state = {
        title: '',
        img: '',
        ingredients: '',
        directions: '',
        cook_time: ''
    }

    handleOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        let recipe = {...this.state, id: this.props.recipe.id}
        this.props.editRecipe(recipe)
        this.setState({
            title: '',
            img: '',
            ingredients: '',
            directions: '',
            cook_time: ''
        })
    }

    render(){
        return(
        <RecipeWrapper>
            <RecipeHeadline>Edit Recipe</RecipeHeadline>
            <div className="form-container">
            <form onSubmit={this.handleOnSubmit}>
                <Field>
                    <input type="text" placeholder="Image URL" value={this.state.img} name="img" onChange={this.handleOnChange}/>
                </Field>
                <Field>
                    <input type="text" placeholder="Ingredients" value={this.state.ingredients} name="ingredients" onChange={this.handleOnChange}/>
                </Field>
                <Field>
                    <input type="text" placeholder="Directions" value={this.state.directions} name="directions" onChange={this.handleOnChange}/>
                </Field>
                <Field>
                    <input type="text" placeholder="Total Cook Time" value={this.state.cook_time} name="cook_time" onChange={this.handleOnChange}/>
                </Field>
                <SubmitBtn type="submit">Edit Recipe</SubmitBtn>
            </form>
            </div>
        </RecipeWrapper>
        )
    }
}

RecipeEdit.defaultProps = {
    recipes: {}
}

export default connect(null, { editRecipe })(RecipeEdit)

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

const RecipeWrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: #f6f1f0;
  padding-right: 80px;
`

const RecipeHeadline = styled.div`
  text-align: center;
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`





    /* <div>
            <h3>Recipe Edit Form</h3>
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Image URL" value={this.state.img} name="img" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Ingredients" value={this.state.ingredients} name="ingredients" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Directions" value={this.state.directions} name="directions" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Total Cook Time" value={this.state.cook_time} name="cook_time" onChange={this.handleOnChange}/>                
                <input type="submit" value="Submit"/>
            </form>
        </div> */