import "./App.css";
import Login from "./components/Login/Login.js";
import UserList from "./components/UserList/UserList";
import { useState } from "react";

function App() {
  const [user, SetUser] = useState([]);

  const addUser = (data) => {
    SetUser((prev) => {
      const updatedArray = [...prev];
      const obj = {
        id: Math.random().toString(),
        name: data.name,
        age: data.age,
      };

      updatedArray.push(obj);

      console.log("updatedArray = "+JSON.stringify(updatedArray));

      return updatedArray;
    });
  };

  let content = (
    <p style={{textAlign:'center'}}>No user found</p>
  )

  if(user.length>0){
    content = <UserList userData={user}/>
  }

  return (
    <div>
      <section id="form">
        <Login onAddUser={addUser} />
      </section>
      <section id="users">{content}
      </section>
    </div>
  );
}

export default App;
