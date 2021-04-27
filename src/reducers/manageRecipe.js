export default function manageRecipe(state = {recipes: []}, action) {
    // console.log(state)
    switch(action.type) {
        case "FETCH_RECIPES":
            return {
                recipes: action.payload
            }
        case "ADD_RECIPE":
            return {
                ...state, recipes: [...state.recipes, action.payload]
            }
        case 'ADD_REVIEW':
            let recipes = state.recipes.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: recipes}
        case 'DELETE_REVIEW':
            debugger
            let allRecipes = state.recipes.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: allRecipes}

        default:
            return state
    }
}



// ...state,
// recipes: [...state.recipes]  


