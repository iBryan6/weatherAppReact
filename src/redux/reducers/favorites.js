const defaultState = [];

const favorites = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          city: "test"
        }
      ];
    default:
      return state;
  }
};

export default favorites;
