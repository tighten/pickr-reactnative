import {GET_CATEGORIES, GET_CATEGORIES_SUCCESS} from "../actions/action";

const initialState = {
  categories: [],
  loading: false
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, loading: true};
    case GET_CATEGORIES_SUCCESS:
      return {...state, categories: action.payload.data};
    default:
      return state;
  }
};
