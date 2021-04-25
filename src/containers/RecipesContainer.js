import { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Recipe from '../components/Recipe'
import RecipeInput from '../components/RecipeInput'
import RecipeList from '../components/RecipeList'
import { fetchRecipes } from '../actions/fetchRecipes'

class RecipesContainer extends Component {

    componentDidMount(){
        this.props.fetchRecipes()
    }
    render() {
        return(
            <div>
                    <Route path='/recipes/new' component={RecipeInput}/><br></br>
                    <Route path='/recipes/:id' render={(routerProps) => <Recipe {...routerProps} recipes={this.props.recipes} />} />
                    <Route exact path='/recipes' render={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes} />} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)

