export function fetchRecipes() {
    return (dispatch) => {

    
    console.log('inside fetch recipes')
    fetch('http://localhost:3000/api/v1/recipes')
      .then(resp => resp.json())
      .then(recipes => dispatch({
          type: 'FETCH_RECIPES',
          payload: recipes

      }))
    }
}