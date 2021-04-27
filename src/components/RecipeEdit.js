import { Component } from 'react'
import { connect } from 'react-redux'
import { editRecipe } from '../actions/editRecipe'

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
        <div>
            <h3>Recipe Form</h3>
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Image URL" value={this.state.img} name="img" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Ingredients" value={this.state.ingredients} name="ingredients" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Directions" value={this.state.directions} name="directions" onChange={this.handleOnChange}/>
                <input type="text" placeholder="Total Cook Time" value={this.state.cook_time} name="cook_time" onChange={this.handleOnChange}/>
                <input type="text" placeholder="User" value={this.state.user_id} name="user_id" onChange={this.handleOnChange}/>
                <input type="submit" value="Submit"/>
            </form>
            <p>Input: {this.state.title}</p>
        </div>
        )
    }
}

RecipeEdit.defaultProps = {
    recipes: {}
}

export default connect(null, { editRecipe })(RecipeEdit)