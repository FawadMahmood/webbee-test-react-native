import {
    ADD_FIELD
} from './actions';

const initialState: Field[] = [
];


const fields = (
    state = initialState,
    action: FieldsActionTypes_U,
): Field[] => {
    switch (action.type) {
        case ADD_FIELD:
            if (!state.find((sr) => sr.id === action.field.id)) {
                return [
                    ...state,
                ];
            }
            return state;
        default:
            return state;
    }
};

export default fields;
