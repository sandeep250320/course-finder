import { GET_CARDS, CARDS_ERROR } from "../action/actionTypes";

const initialState = {
  dataList: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        dataList: action.payload,
        loading: false,
      };

    case CARDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
