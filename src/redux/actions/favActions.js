const addFavorite = city => {
  console.log(city);
  return {
    type: "ADD_FAVORITE",
    city
  };
};

export default addFavorite;
