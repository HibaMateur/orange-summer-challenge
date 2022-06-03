import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{marginLeft:"38%"}}>
      <Link to="/items/list"><span style={{padding:"2%"}}> List of Items</span></Link>
      <Link to="/user/list"> <span style={{padding:"2%"}}>List of User</span></Link>
      <Link to="/home"><span style={{padding:"2%"}}> Home</span></Link>
    
    </div>
  );
};

export default NavBar;