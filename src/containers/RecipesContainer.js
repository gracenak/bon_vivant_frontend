import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Recipe from '../components/Recipe'
import RecipeInput from '../components/RecipeInput'
import RecipeList from '../components/RecipeList'
import { fetchRecipes } from '../actions/fetchRecipes'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import RecipeEdit from '../components/RecipeEdit' 

class RecipesContainer extends Component {

    componentDidMount(){
        this.props.fetchRecipes()
    }
    render() {
        return(
            <div>
            <NavBar />
            <Switch>
                <Route exact path='/recipes/new' component={RecipeInput}/>
                <Route exact path='/' component={Home} />
                <Route exact path='/recipes/:slug' render={(routerProps) => <Recipe {...routerProps} recipes={this.props.recipes} />} />
                <Route exact path='/recipes' render={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes} />} />
                <Route exact path='/recipes/:slug/edit' render={(routerProps) => <RecipeEdit {...routerProps} recipes={this.props.recipes} />} />
            </Switch>
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

