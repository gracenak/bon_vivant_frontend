import { Component } from 'react'
import { connect } from 'react-redux'
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
                RecipesContainer
                <RecipeInput /><br></br>
                <RecipeList recipes = {this.props.recipes} />
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