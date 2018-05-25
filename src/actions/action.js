export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: {
      request: {
        url: '/api/categories'
      }
    }
  }
};

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: {
      request: {
        method: 'POST',
        url: '/api/categories',
        data: category
      }
    }
  }
};
