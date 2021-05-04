/* actions is a function that take the arguments and returns the action, its composed of two kinds, payload and action type*/
import { ActionTypes } from "./constants";

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
