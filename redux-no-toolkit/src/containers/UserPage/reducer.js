import { ActionTypes } from "./constants";
// a global factory that you  send a request to, and depent on that request, it
// updates a state, depending of the type of a request

// big objects with many properties, this is what redux store is, object with a lot of preperties and these
// properties are object, whitch can hold other project, numbers, string, many many things

const defaultState = {
  user: null,
};

//reducer is simple a function

// store is combination of reducers, the are combined togeter by using a special function from redux library
//put store on the 'root' lever of the app

//takes care of state managment and state changes, the action is pretty mutch what request it has received, is composed of the payload and type of action
// payload is part of the store that it needs to be updated
export default function userPageReducer(state = defaultState, action) {
  //state changes are based on the type of action. Thats handled inside the switch. Every reduces would look like this
  // good pratice is to use reducer for every page
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload }; // ...state always needs to apper, without spread operator all previous state will be lost
    default:
      return state;
  }
}
