import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopSections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopSections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollections = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopSections],
    (collections) => collections[collectionUrlParam]
  )
);
