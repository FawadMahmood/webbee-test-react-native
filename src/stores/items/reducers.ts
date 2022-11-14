import {
    ADD_ITEM, UPDATE_ITEM
} from './actions';

const initialState: Item[] = [];


const fields = (
    state = initialState,
    action: ItemActionTypes_U,
): Item[] => {
    let newState;
    switch (action.type) {
        case ADD_ITEM:
            if (!(state.find((sr) => sr.id === action.item.id))) {
                return [
                    ...state,
                    action.item
                ];
            }
            return state;
        case UPDATE_ITEM:
            console.log("update came to item", action.item);

            newState = [...state];
            newState.map((_, i) => {
                if (_.id === action.item.id) {
                    newState[i] = action.item;
                }
            })
        default:
            return state;
    }
};

export default fields;
