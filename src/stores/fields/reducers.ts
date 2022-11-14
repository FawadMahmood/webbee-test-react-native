import {
    ADD_FIELD, DELETE_FIELD, UPDATE_FIELD
} from './actions';

const initialState: Field[] = [
];


const fields = (
    state = initialState,
    action: FieldsActionTypes_U,
): Field[] => {
    let newState;
    switch (action.type) {
        case ADD_FIELD:
            if (!state.find((sr) => sr.id === action.field.id)) {
                return [
                    ...state,
                    action.field
                ];
            }
            return state;
        case UPDATE_FIELD:
            newState = [...state];
            newState.map((_, i) => {
                if (_.id === action.field.id) {
                    newState[i] = action.field;
                }
            })
            return newState;
        case DELETE_FIELD:
            return [...state.filter((s) => s.id !== action.id)];
        default:
            return state;
    }
};

export default fields;
