export const setUpItemQuntity = (cartItems, newCartItem) => {
  // first check the if cart item already in the list
  const checkCartItemInTheList = cartItems.find(
    item => item.id === newCartItem.id
  );
  // if the item is already in the cart increase the quantity
  if (checkCartItemInTheList) {
    return cartItems.map(caItem =>
      caItem.id === newCartItem.id
        ? { ...caItem, quantity: caItem.quantity + 1 }
        : caItem
    );
  }
  // if not in the cart item mean it is new cart item add base quantity 1
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const removeItem = (cartItems,removeCartItem) => {
  // find the cart items 
  const cartItemToRemove = cartItems.find(item => item.id === removeCartItem.id);
  if (cartItemToRemove.quantity ===  1) {
      return cartItems.filter(item => item.id !== removeCartItem.id)
  }
  return cartItems.map(caItem =>
      caItem.id === removeCartItem.id
        ? { ...caItem, quantity: caItem.quantity - 1 }
        : caItem
    );
}