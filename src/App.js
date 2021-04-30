import { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchRecipes } from './actions/fetchRecipes'
import RecipesContainer from './containers/RecipesContainer'
class App extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
        <RecipesContainer />
      </div>
    );
  }
}

export default connect()(App);
