import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";

const Home = ()=>{
  const [users , setUsers ] = useState([]);
  const [email , setEmail] = useState("");
  const [firstname , setFirstname] = useState("");
  const [lastname , setLastname] = useState("");
  const [age , setAge ] = useState("");

  useEffect( ()=>{
    axios.get("http://localhost:5000/users/getAllUsers")
    .then( (response)=>{
      setUsers([...response.data]);
    })
  },[]);

  async function submitHandler(e)
  {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/users/addUser" , {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        email,
        firstname,
        lastname,
        age
      })
    })
    const data = await response.json();

    if(data.msg === "user created succesfully")
    {
      setUsers([...users , {email,firstname,lastname,age}]);
    }
  }

  function deleteHandler()
  {

  }

  return(
    <div className="container">
      <div className="left">
        <form onSubmit={ submitHandler }>
        <div>
          <label>Email</label>
          <input
            type="email" 
            placeholder="Enter Email..." 
            value={email}
            onChange={ (e)=>{setEmail(e.target.value)} }
          />
        </div>
        <div>
          <label>First Name</label>
          <input 
            type="text"
            placeholder="Enter First Name..."
            value={firstname}
            onChange={ (e)=>{setFirstname(e.target.value)} }  
          />
        </div>
        <div>
          <label>Last Name</label>
          <input 
            type="text"
            placeholder="Enter Last Name..."
            value={lastname}
            onChange={ (e)=>{setLastname(e.target.value)} }  
          />
        </div>
        <div>
          <label>Age</label>
          <input 
            type="number"
            min="0"
            placeholder="Enter Age..."
            value={age}
            onChange={ (e)=>{setAge(e.target.value)} }  
          />
        </div>
        <button type="submit">Add User</button>
      </form>
      </div>
      <div className="right">
        <div className="users-container">
          <table border="1">
            <thead>
              <tr className="header">
                <th align="left">Email</th>
                <th align="left">Firstname</th>
                <th align="left">Lastname</th>
                <th align="center">Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              users.map( (user,index)=>{
                return(
                  <tr key={index} style={ {color:"grey"} }>
                    <td align="left">{user.email}</td>
                    <td align="left">{user.firstname}</td>
                    <td align="left">{user.lastname}</td>
                    <td align="center">{user.age}</td>
                    <td className="wrapper">
                      <button style={ {background:"green"} }>
                        Edit
                      </button>
                      <button onClick={deleteHandler} style={ {background:"red"} }>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;