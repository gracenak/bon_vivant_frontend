// export const editRecipe = (data) => {
//     debugger
//     return(dispatch) => {
//         fetch(`http://localhost:3000/recipes/data.id.`, {
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             method: 'PATCH',
//             body: JSON.stringify(data)
//         })
//         .then(resp => resp.json())
//         .then(recipe => {
//             dispatch({
//             type: 'EDIT_RECIPE',
//             payload: recipe })
    
//         })
//     }
// }