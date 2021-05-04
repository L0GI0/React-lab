/* actions is a function that take the arguments and returns the action, its composed of two kinds, payload and action type*/
import { ActionTypes } from "./constants";

export const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
