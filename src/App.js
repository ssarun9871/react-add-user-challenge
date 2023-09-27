import "./App.css";
import Login from "./components/Login/Login.js";
import UserList from "./components/UserList/UserList";
import ErrorDialog from "./components/ErrorDialog/ErrorDialog";
import "../src/components/UI/Modal.css";
import { useState } from "react";

function App() {
  const [user, SetUser] = useState([]);
  const [isValid,SetIsValid] = useState(true);
  const [inValidMsg , SetInvalidMsg] = useState('Invalid input!');

  const addUserHandler = (data) => {
    if(data.name.slice().length===0){
       SetIsValid(false)
       SetInvalidMsg("Invalid name!")
       return;
    }
    
    if(parseInt(data.age)<1 || parseInt(data.age)>150){
      SetIsValid(false)
      SetInvalidMsg("Age should be 1 < age < 150!")
      return;
    }
    SetUser((prev) => {
      const updatedArray = [...prev];
      const obj = {
        id: Math.random().toString(),
        name: data.name,
        age: data.age,
      };

      updatedArray.push(obj);

      console.log("updatedArray = " + JSON.stringify(updatedArray));

      return updatedArray;
    });
  };

  const errorOkHandler = () => {
    SetIsValid(true);
    SetInvalidMsg("")
  }

  let content = <p style={{ textAlign: "center" }}>No user found</p>;

  if (user.length > 0) {
    content = <UserList userData={user} />;
  }

  return (

    <div>
      {!isValid?<ErrorDialog error={inValidMsg} onOkay={errorOkHandler}/>:""}

      <section id="form">
        <Login onAddUser={addUserHandler} />
      </section>

      <section id="users">{content}</section>
    </div>
  );
}

export default App;
