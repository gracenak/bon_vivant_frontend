export const deleteReview = (reviewId, accountId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/recipes/${accountId}/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(recipe => dispatch({ type: 'DELETE_REVIEW', payload: recipe}))
    }
}