import { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/addRecipe'

class RecipeInput extends Component {
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
        this.props.addRecipe(this.state)
        // this.setState({
        //     title: '',
        //     img: '',
        //     ingredients: '',
        //     directions: '',
        //     cook_time: ''
        // })
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
                <input type="submit" />
            </form>
        </div>
        )
    }

}

export default connect(null, { addRecipe })(RecipeInput)