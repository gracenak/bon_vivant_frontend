export const deleteReview = (reviewId, recipeSlug) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/recipes/${recipeSlug}/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(recipe => dispatch({ type: 'DELETE_REVIEW', payload: recipe}))
    }
}