import {
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORIES_SUCCESS, SELECT_CATEGORY
} from "../actions/action";

const initialState = {
  categories: [],
  selectedCategoryId: null
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.concat(action.payload.data),
        selectedCategoryId: action.payload.data.id
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data,
        selectedCategoryId: action.payload.data[0].id
      };
    case SELECT_CATEGORY:
      return {...state, selectedCategoryId: action.payload.selectedCategoryId};
    default:
      return state;
  }
};
