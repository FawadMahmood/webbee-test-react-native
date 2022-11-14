import {
    ADD_CATEGORY, ADD_FIELD_RELATION, ADD_ITEM_RELATION, DELETE_CATEGORY, REMOVE_FIELD_RELATION, UPDATE_CATEGORY
} from './actions';

const initialState: CategoryState = {
    byIds: {},
    allIds: []
}




const categories = (
    state = initialState,
    action: CategoriesActionTypes_U,
): CategoryState => {
    let newState = { ...state };

    switch (action.type) {
        case ADD_CATEGORY:
            newState.byIds = { ...state.byIds, [action.category.id]: { ...action.category, fieldIds: [], itemIds: [] } };
            newState.allIds = [...state.allIds, action.category.id];
            console.log("state is now", newState.allIds.length, Object.entries(newState.byIds).length);
            return newState;
        // case ADD_CATEGORY:
        //     if (!state.find((sr) => sr.id === action.category.id)) {
        //         return [
        //             ...state,
        //             { ...action.category },
        //         ];
        //     }
        //     return state;
        // case UPDATE_CATEGORY:
        //     newState = [...state];
        //     newState.map((_, i) => {
        //         if (_.id === action.category.id) {
        //             newState[i] = action.category;
        //         }
        //     })
        //     return newState;
        case DELETE_CATEGORY:
            delete newState.byIds[action.id];
            newState.allIds = newState.allIds.filter((s) => s !== action.id);
            console.log("state is now", newState.allIds.length, Object.entries(newState.byIds).length);
            return newState;
        case ADD_FIELD_RELATION:
            newState.byIds[action.relation.id].fieldIds = [...newState.byIds[action.relation.id].fieldIds, action.relation.item_id]
            return newState;
        case ADD_ITEM_RELATION:
            newState.byIds[action.relation.id].itemIds = [...newState.byIds[action.relation.id].itemIds, action.relation.item_id]
            return newState;
        case REMOVE_FIELD_RELATION:
            newState.byIds[action.relation.id].fieldIds = newState.byIds[action.relation.id].fieldIds.filter(s => s !== action.relation.item_id);
            return newState;
        default:
            return state;
    }
};

export default categories;
