const defaultState = [
  { id: 1, city: "Cochabamba", tempC: "90C", tempF: "40F", hum: "40%" },
  { id: 2, city: "La Paz", tempC: "100C", tempF: "50F", hum: "50%" },
];

const favorites = (state = defaultState, action) => {
  switch (action.type) {
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
