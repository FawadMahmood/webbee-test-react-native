import {
    ADD_ITEM
} from './actions';

const initialState: Field[] = [
];


const fields = (
    state = initialState,
    action: FieldsActionTypes_U,
): Field[] => {
    let newState;
    switch (action.type) {
        case ADD_ITEM:
            if (!state.find((sr) => sr.id === action.field.id)) {
                return [
                    ...state,
                    action.field
                ];
            }
            return state;
        default:
            return state;
    }
};

export default fields;
