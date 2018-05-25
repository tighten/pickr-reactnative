import {
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORIES_SUCCESS
} from "../actions/action";

const initialState = {
  categories: [],
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_SUCCESS:
      return {...state, categories: state.categories.concat(action.payload.data)};
    case GET_CATEGORIES_SUCCESS:
      return {...state, categories: action.payload.data};
    default:
      return state;
  }
};
