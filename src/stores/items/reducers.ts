import {
    ADD_ITEM, ADD_ITEM_ATTRIBUTE_RELATION, UPDATE_ITEM
} from './actions';

const initialState: ItemState = {
    byIds: {},
    allIds: []
};




const fields = (
    state = initialState,
    action: ItemActionTypes_U,
): ItemState => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_ITEM:
            newState.byIds = { ...state.byIds, [action.item.id]: { ...action.item } };
            newState.allIds = [...state.allIds, action.item.id];
            console.log("state is now", newState.allIds.length, Object.entries(newState.byIds).length);
            return newState;
        // case ADD_ITEM:
        //     if (!(state.find((sr) => sr.id === action.item.id))) {
        //         return [
        //             ...state,
        //             action.item
        //         ];
        //     }
        //     return state;
        // case UPDATE_ITEM:
        //     console.log("update came to item", action.item);

        //     newState = [...state];
        //     newState.map((_, i) => {
        //         if (_.id === action.item.id) {
        //             newState[i] = action.item;
        //         }
        //     })
        case ADD_ITEM_ATTRIBUTE_RELATION:
            newState.byIds[action.relation.id].attributeIds = [...newState.byIds[action.relation.id].attributeIds, action.relation.attrubute_id]
            return newState;
        default:
            return state;
    }
};

export default fields;
