import React, { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { setUser } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUser } from "./selectors";
import styled from "styled-components";

const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  img {
    width: 100%auto;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const UserEmail = styled.h3`
  font-size: 18px;
  color: #747070;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({ user }));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default function UserPage(props) {
  const { userId } = useParams();

  const { setUser } = actionDispatch(useDispatch());
  const { user } = useSelector(stateSelector);
  const fetchUser = async (id) => {
    const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch(
      (err) => {
        console.log(`Error: ${err}`);
      }
    );
    if (response) {
      console.log(`User = ${response.data.data.first_name}`);
      setUser(response.data.data);
    }
  };

  useEffect(() => {
    if (userId && userId !== "") fetchUser(userId);
  }, [userId]);

  if (!user) {
    console.log("Loading");
    return <div>Loading...</div>;
  }

  console.log(`Loaded ${user}`);

  return (
    <UsersContainer>
      <UserWrapper>
        <UserImage>
          <img src={user.avatar}></img>
        </UserImage>
        <UserName>
          {user.first_name} {user.last_name}
        </UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserWrapper>
    </UsersContainer>
  );
}
