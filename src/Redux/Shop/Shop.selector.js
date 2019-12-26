import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const shopSelector = createSelector(
  [selectShop],
  shop => shop.collection
);

export const collectionSelector = collectionRouteName =>
  createSelector(
    [shopSelector],
    collection => collection[collectionRouteName]
  );

// the perpurse of this selector to convert object to array
export const collectionOverviewSelector = createSelector(
  [shopSelector],
  collection => Object.keys(collection).map(el => collection[el])
);
