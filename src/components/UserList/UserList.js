import React from "react";
import "./UserList.css";
import UserListItem from "../UserListItem/UserListItem";

const UserList = (props) => {
  return (
    <ul className="goal-list">
      {props.userData.map((user) => (
        <UserListItem key={user.id} id={user.id}>
          {`${user.name}    ${user.age}`}
        </UserListItem>
      ))}
    </ul>
  );
};


export default UserList;