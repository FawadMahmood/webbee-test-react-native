import {
    ADD_FIELD, DELETE_FIELD, UPDATE_FIELD
} from './actions';

const initialState: FieldState = {
    byIds: {

    },
    allIds: [],
}


const fields = (
    state = initialState,
    action: FieldsActionTypes_U,
): FieldState => {
    let newState = { ...state };

    switch (action.type) {
        case ADD_FIELD:
            newState.byIds = { ...state.byIds, [action.field.id]: action.field };
            newState.allIds = [...state.allIds, action.field.id];
            console.log("state is now", newState.allIds.length, Object.entries(newState.byIds).length);
            return newState;
        // case ADD_FIELD:
        //     if (!state.find((sr) => sr.id === action.field.id)) {
        //         return [
        //             ...state,
        //             action.field
        //         ];
        //     }
        //     return state;
        // case UPDATE_FIELD:
        //     newState = [...state];
        //     newState.map((_, i) => {
        //         if (_.id === action.field.id) {
        //             newState[i] = action.field;
        //         }
        //     })
        //     return newState;
        // case DELETE_FIELD:
        //     return [...state.filter((s) => s.id !== action.id)];
        default:
            return state;
    }
};

export default fields;
