export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';



export const addCategory = (
    category: Category,
): AddCategory => ({
    type: ADD_CATEGORY,
    category,
});


export const updateCategory = (
    category: Category,
): AddCategory => ({
    type: UPDATE_CATEGORY,
    category,
});


export const deleteCategory = (
    id: string,
): DeleteCategory => ({
    type: DELETE_CATEGORY,
    id,
});