import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {  Button } from "antd";

function ListUsers() {
  const [UsersList, setUsersList] = useState([]);

  const getUser= () => {
    Axios.get("http://localhost:3001/user/getUsers").then((response) => {
    console.log(response)
    setUsersList(response.data);
    });
  };
  const deleteUsers = (id) => {
    Axios.delete(`http://localhost:3001/user/deleteUser/${id}`).then((response) => {
        setUsersList(
            UsersList.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };

  useEffect(()=>{
    if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).role==="manager") 

    getUser();
    
},[]);


  return(<div>
   
    <table className="table">
  
    <thead>
      <tr>
        <th style={{ height: "50px" }}> firstname</th>
        <th style={{ height: "50px" }}>lastname</th>
  
      </tr>
    </thead>
    <tbody>
          
        {UsersList.map((val) => (
        <tr>
          
          <td style={{ backgroundColor: "white" }}>{val.firstname}</td>
          <td style={{ backgroundColor: "white" }}>{val.lastname}</td>
            
          <td style={{ backgroundColor: "white" }}>
            <Button onClick={() => { deleteUsers(val._id);}} >Delete User</Button>
            <Link to={`/user/edit/${val._id}`}>
            <Button >Edit</Button>
            </Link>
            <Link to={`/user/show/${val._id}`}>
            <Button >show</Button>
            </Link>
            </td>
            </tr>
        ))}
        
    <Link to={`/user/add/`}>
    {
               
                    (localStorage.getItem("user"))
                 ? (JSON.parse(localStorage.getItem("user")).role==="manager")
                    ?
                    <Button style={{marginLeft:"280%"}}>Add Users</Button>
     :null
        :null
          }
         
            </Link>
            </tbody>
    </table></div>
  )
}
export default ListUsers