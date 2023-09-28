import React from "react";
import "./Login.css";
import "../UI/Button.css";
import { useState, useRef } from "react";

//In this component, we only take the user data and pass on to the function(onAddUser) present in App.js
const Login = (props) => {
  const userName = useRef();
  const userAge = useRef();
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // const onNameChangeHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const onAgeChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: userName.current.value,
      age: userAge.current.value,
    };
    props.onAddUser(userData);

    userName.current.value = '';
    userAge.current.value ='';
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input type="text" ref={userName}></input>
        <label>Age(years)</label>
        <input type="text" ref={userAge}></input>
      </div>
      <button className="button">Add user</button>
    </form>
  );
};

export default Login;
