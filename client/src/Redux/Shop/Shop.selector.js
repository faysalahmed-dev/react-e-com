import { createSelector } from 'reselect';
// selcct shop obj from state
const selectShop = state => state.shop;

// select collection from shop state object
export const shopSelector = createSelector(
  [selectShop],
  shop => shop.collection
);
/*
  ***   select spaficetiy collectin item accouding to route name
  for example (hats)
*/
export const collectionSelector = collectionRouteName =>
  createSelector(
    [shopSelector],
    collection => (collection ? collection[collectionRouteName] : null)
  );

// the perpurse of this selector to convert object to array
export const collectionOverviewSelector = createSelector(
  [shopSelector],
  collection =>
    collection ? Object.keys(collection).map(el => collection[el]) : []
);
export const loadingSpinnerSelector = createSelector(
  [selectShop],
  shop => shop.isLoading
);
