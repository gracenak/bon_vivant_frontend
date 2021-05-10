export default function manageRecipe(state = {recipes: []}, action) {

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
        case 'EDIT_RECIPE':
            let editedRecipe = state.recipes.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: editedRecipe}    
        case 'DELETE_REVIEW':
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