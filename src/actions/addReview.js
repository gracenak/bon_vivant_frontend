export const addReview = (review, recipeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
            })
            .then(response => response.json())
            .then(recipe => {
                if (recipe.error) {
                    alert(recipe.error)
                } else {
                dispatch({type: 'ADD_REVIEW', payload: recipe})
            }
        })
    
    }
}