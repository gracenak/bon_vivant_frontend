export const editRecipe = (data) => {
  debugger
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/recipes/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(recipe => {
      if (recipe.error) {
          alert(recipe.error)
      } else {
      dispatch({type: 'EDIT_RECIPE', payload: recipe})
      alert('Your recipe has been updated! Return back to Recipes to view')
      }
  })




    // .then(recipe => dispatch({type: 'EDIT_RECIPE', payload: recipe.slug}))
  }

}