export const ADD_FIELD = 'ADD_FIELD';

export const addField = (
    field: Field,
): AddField => ({
    type: ADD_FIELD,
    field,
});