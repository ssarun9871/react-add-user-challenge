import React from "react";
import "./Login.css";
import "../UI/Button.css";
import { useState } from "react";

//In this component, we only take the user data and pass on to the function(onAddUser) present in App.js
const Login = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      age: age,
    };
    props.onAddUser(userData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input type="text" onChange={onNameChangeHandler}></input>
        <label>Age(years)</label>
        <input type="text" onChange={onAgeChangeHandler}></input>
      </div>
      <button className="button">Add user</button>
    </form>
  );
};

export default Login;
