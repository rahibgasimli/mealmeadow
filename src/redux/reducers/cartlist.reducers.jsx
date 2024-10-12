export const cardListReducer = (state = [],action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state,action.payload]
        case "REMOVE_FROM_CART":
            return state.filter(item =>item.id !== action.payload);
        case "EMPTY_CART":
            return []
        default:
            return state;
    }
}