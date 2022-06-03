/* eslint-disable */
import React, { useState,useEffect } from "react";
import Axios  from "axios";
import { useParams } from "react-router";
import { Card } from "antd";

const ShowUsers = () => {

    const {id} = useParams();
 

  const [users, setUsers] = useState([]);

    const getUsers = async(id) => {
        Axios.get(`http://localhost:3001/user/getByIdUserrrr/${id}`).then(async (res) => {
            setUsers(res.data);
        });
      };
    
      useEffect(() => {
        
       
        
        if (id) {
           
            getUsers(id)
        }
        
        
      }, [id]);

  return(
      
       <div>
         
        <center>
         <Card  style={{ width: 300,marginTop:"3%"}}hoverable title={"Detail Users :"}>
        <ul>
      <li>FirstName :{users.firstname}</li>
      <li>LastName :{users.lastname}</li>
      </ul>
     </Card>
     </center>
     </div>
      
  )
}
export default ShowUsers;