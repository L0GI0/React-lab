const ActionTypes = {
  SET_USERS: "app/containers/HomePage/SET_USERS",
}; /* key value pair to tell what is actual action type, so reduces based on action type 
will known what state to update with provided payload data, its like enum, action type are named in uppera case, its just adopted 
convection by redux community, these string have to be unique, even in the scope of the whole app */

export { ActionTypes };
