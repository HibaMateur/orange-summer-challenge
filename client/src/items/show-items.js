/* eslint-disable */
import React, { useState,useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import { Card } from "antd";

const ShowItems = () => {

    const {id} = useParams();
  const [items, setItems] = useState([]);

    const getItems = async(id) => {
        Axios.get(`http://localhost:3001/items/getItemsById/${id}`).then(async (res) => {
          setItems(res.data);
        });
      };
    
      useEffect(() => {
        
       
        
        if (id) {
           
          getItems(id)
        }
        
        
      }, [id]);

  return(
      <div >
        <center>
         <Card  style={{ width: 300,marginTop:"3%"}}hoverable title={"Items :"}>
        <ul>
      <li>Name :{items.name}</li>
      <li>Description :{items.description}</li>
      <li>Stock :{items.stock}</li>
      <li>Price :{items.price}</li>
     
      </ul>
      </Card>
      </center>
      </div>
  )
}
export default ShowItems;