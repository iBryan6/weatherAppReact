const addFavorite = city => {
  console.log(city);
  return {
    type: "ADD_FAVORITE",
    payload: city
  };
};

export default addFavorite;
