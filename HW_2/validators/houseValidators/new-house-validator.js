module.exports = houseObject => {
  const {city, square, price} = houseObject;

  if (!city || !square || !price) {
    throw new Error('House object is not valid')
  }
};