import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchRecipes } from '../actions/fetchRecipes'
import Recipe from '../components/Recipe'
import RecipeInput from '../components/RecipeInput'
import RecipeList from '../components/RecipeList'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
class RecipesContainer extends Component {

    render() {
        return(
            <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/recipes/:slug' render={(routerProps) => <Recipe {...routerProps} recipes={this.props.recipes && this.props.recipes} />} />
                <Route exact path='/recipes' render={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes} />} />
            </Switch>
            </div>
        )
    }

    //lifecycle method that runs after render during the commit phase
    componentDidMount(){
        this.props.fetchRecipes()
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)


