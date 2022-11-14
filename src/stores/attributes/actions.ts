export const ADD_NEW_ATTRIBUTE = 'ADD_NEW_ATTRIBUTE';
export const UPDATE_ATTRIBUTE = "UPDATE_ATTRIBUTE"
export const DELETE_ATTRIBUTE = "DELETE_ATTRIBUTE"


export const addAttribute = (
    attribute: Attribute,
): AddAttribute => ({
    type: ADD_NEW_ATTRIBUTE,
    attribute,
});



// export const updateItem = (
//     item: Item,
// ): AddItem => ({
//     type: UPDATE_ITEM,
//     item,
// });
