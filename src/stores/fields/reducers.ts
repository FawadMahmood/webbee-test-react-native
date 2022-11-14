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
        case DELETE_FIELD:
            delete newState.byIds[action.id];
            newState.allIds = newState.allIds.filter((s) => s !== action.id);
            return newState;
        default:
            return state;
    }
};

export default fields;
