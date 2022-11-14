import {
    ADD_NEW_ATTRIBUTE, UPDATE_ATTRIBUTE
} from './actions';

const initialState: AttributeState = {
    byIds: {},
    allIds: []
};


const fields = (
    state = initialState,
    action: AttributeActionTypes_U,
): AttributeState => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_NEW_ATTRIBUTE:
            newState.byIds = { ...state.byIds, [action.attribute.id]: { ...action.attribute } };
            newState.allIds = [...state.allIds, action.attribute.id];
            console.log("state is now", newState.allIds.length, Object.entries(newState.byIds).length);
            return newState;
        default:
            return state;
    }
};

export default fields;
