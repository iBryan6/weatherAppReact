const initialState = { city: "" };

export default (state = initialState, action) => {
  if (action.type === "ADD_FAVORITE") {
    return {
      ...state,
      city: action.payload
    };
  }
  return state;
};

export const showFavorites = state =>state.favoriteReducer.city;