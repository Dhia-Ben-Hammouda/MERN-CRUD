import React from "react";
import { Routes , Route } from "react-router-dom";
import "./styles/styles.scss";
import Home from "./Home.jsx";
import UserDetails from "./UserDetails.jsx";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/:id" element={ <UserDetails/> } />
      </Routes>
    </>
  );
}

export default App;