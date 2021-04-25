export default function manageRecipe(state = {recipes: []}, action) {
    // console.log(state)
    switch(action.type) {
        case "FETCH_RECIPES":
            return {
                recipes: action.payload
            }
        case "ADD_RECIPE":
            return {
                ...state, recipes: [...state.recipes.data, action.payload]
            }
        default:
            return state
    }
}



// ...state,
// recipes: [...state.recipes]  


