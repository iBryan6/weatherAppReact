const initialState = { favList: [] };

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favList: [...state.favList, action.city ]
      };
    default:
      return state;
  }
};

export default favorites;
