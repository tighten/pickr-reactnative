export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';

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
