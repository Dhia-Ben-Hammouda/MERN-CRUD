import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";

const Form = ()=>{
  const [email , setEmail] = useState("");
  const [firstname , setFirstname] = useState("");
  const [lastname , setLastname] = useState("");
  const [age , setAge ] = useState("");

  function submitHandler(e)
  {
    e.preventDefault();

    


  }
  return (
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
  );
}

export default Form;