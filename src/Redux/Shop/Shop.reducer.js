import shopData from '../../Data/shop.data';

const initalState = {
  collection: shopData
};

const shopReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
