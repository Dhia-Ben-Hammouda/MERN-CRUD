import React from "react";
import Form from "./Form.jsx";
import axios from "axios";
import { useState , useEffect } from "react";

const Home = ()=>{
  const [users , setUsers ] = useState([]);

  useEffect( ()=>{
    axios.get("http://localhost:5000/users/getAllUsers")
    .then( (response)=>{
      setUsers([...response.data]);
    })
  },[]);

  return(
    <div className="container">
      <div className="left">
        <Form />
      </div>
      <div className="right">
        <div className="users-container">
          <table border="1">
            <tr className="header">
              <th align="left">Email</th>
              <th align="left">Firstname</th>
              <th align="left">Lastname</th>
              <th align="left">Age</th>
              <th>Actions</th>
            </tr>
            {
              users.map( (user)=>{
                return(
                  <tr style={ {color:"grey"} }>
                    <th align="left">{user.email}</th>
                    <th align="left">{user.firstname}</th>
                    <th align="left">{user.lastname}</th>
                    <th align="left">{user.age}</th>
                    <th className="wrapper">
                      <button style={ {background:"green"} }>
                        Edit
                      </button>
                      <button style={ {background:"red"} }>
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })
            }

          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;