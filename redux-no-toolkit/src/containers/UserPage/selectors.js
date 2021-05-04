import { createSelector } from "reselect";
const userPageState = (state) => state.userPage;

export const makeSelectUser = createSelector(
  userPageState,
  (userPage) => userPage.user
); /* make is naming convenction for selectors to make easier to work with redux*/
