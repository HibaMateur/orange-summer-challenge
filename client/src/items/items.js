import React, { useState, useEffect } from "react";
import Axios, * as others from "axios";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import "./item.css"

function ListItems() {
  const [ItemsList, setItemsList] = useState([]);

  const getItems= () => {
    Axios.get("http://localhost:3001/items/getItems").then((response) => {
    console.log(response)
    setItemsList(response.data);
    });
  };
  const deleteItems = (id) => {
    Axios.delete(`http://localhost:3001/items/${id}`).then((response) => {
      setItemsList(
        ItemsList.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };

  useEffect(()=>{
    if (localStorage.getItem("user")) 
    getItems();
    
},[]);


  return(
    <table className="table">
    <thead>
      <tr>
        <th style={{ height: "50px" }}> Name</th>
        <th style={{ height: "50px" }}>Price</th>
  
      </tr>
    </thead>
    <tbody>
        {ItemsList.map((val) => (
         
          
          <tr styl={{marginLeft:"40%"}}>
              <td style={{ backgroundColor: "white" }}> {val.name}</td>
         
              <td style={{ backgroundColor: "white" }}>  {val.price}</td>
          
          <td>
            <Button onClick={() => { deleteItems(val._id);}} >Delete items</Button>
            <Link to={`/items/edit/${val._id}`}>
            <Button >Edit</Button>
            </Link>
            <Link to={`/items/show/${val._id}`}>
            <Button >show</Button>
            </Link></td></tr>
        
        ))}
        
    <Link to={`/items/add/`}>
    {
                (localStorage.getItem("user"))
              
                ?
            <Button style={{marginLeft:"420%"}}>Add Items</Button>
          :null
        
          }
         
            </Link>
      
 
  </tbody>
    </table>
  )
}
export default ListItems