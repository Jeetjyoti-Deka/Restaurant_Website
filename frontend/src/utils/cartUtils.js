export const addDecimal = (num) => {
  return Math.floor((num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate the item price

  state.itemsPrice = addDecimal(
    Number(state.cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0))
  );

  // Calculate the delivery price
  state.deliveryPrice = addDecimal(state.itemsPrice > 60 ? 0 : 10);

  // Calculate the tax price
  state.taxPrice = addDecimal(Number(0.15 * state.itemsPrice));

  // Calculate the total price
  state.totalPrice = addDecimal(
    Number(state.itemsPrice) +
      Number(state.deliveryPrice) +
      Number(state.taxPrice)
  );

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
