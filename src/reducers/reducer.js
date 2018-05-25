import {
  ADD_CATEGORY_SUCCESS, ADD_ITEM,
  GET_CATEGORIES_SUCCESS,
  SELECT_CATEGORY,
  ADD_ITEM_SUCCESS
} from "../actions/action";

const initialState = {
  categories: [],
  selectedCategory: {
    id: 0
  }
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.concat(action.payload.data),
        selectedCategory: action.payload.data
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data
      };
    case SELECT_CATEGORY:
      const selectedCategory = state.categories.find(category => {
        return action.payload.selectedCategoryId === category.id;
      });

      return {...state, selectedCategory};
    case ADD_ITEM_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
};
