import React, { useEffect } from "react";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { setUsers } from "./actions";
import UsersList from "./usersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actionDispatch = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users)),
});

export default function HomePage(props) {
  const { users } = useSelector(stateSelector);
  const { setUsers } = actionDispatch(useDispatch());

  const fetchUsers = async () => {
    const response = await Axios.get("http://reqres.in/api/users").catch(
      (err) => {
        console.log("Err: ", err);
      }
    );
    setUsers(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(`Users: ${users}`);

  return (
    <div>
      <UsersList />
    </div>
  );
}
