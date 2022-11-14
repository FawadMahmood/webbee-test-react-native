import {
    ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY
} from './actions';

const initialState: Category[] = [
];


const categories = (
    state = initialState,
    action: CategoriesActionTypes_U,
): Category[] => {
    switch (action.type) {
        case ADD_CATEGORY:
            if (!state.find((sr) => sr.id === action.category.id)) {
                return [
                    ...state,
                    { ...action.category, fields: [] },
                ];
            }
            return state;
        case UPDATE_CATEGORY:
            return [...state.filter((s) => s.id !== action.category.id), action.category]
        case DELETE_CATEGORY:
            return [...state.filter((s) => s.id !== action.id)];
        default:
            return state;
    }
};

export default categories;
