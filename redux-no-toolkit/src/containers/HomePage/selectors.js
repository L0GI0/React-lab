import { createSelector } from "reselect";
const homePageState = (state) => state.homePage;

export const makeSelectUsers = createSelector(
  homePageState,
  (homePage) => homePage.users
); /* make is naming convenction for selectors to make easier to work with redux*/
