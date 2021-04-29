export const deleteReview = (review) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/recipes/${review.recipe_id}/reviews/${review.id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(recipe => dispatch({type: 'DELETE_REVIEW', payload: recipe}))
    }
  }