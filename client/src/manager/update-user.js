/* eslint-disable */
import React, { useState,useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import { Form, Input, Button } from 'antd';

const UpdateUsers = () => {

    const {id} = useParams();
 
  const [newfirstname, setFirstName] = useState("");
  const [newlastname, setnewLasteName] = useState("");
  const [newemail, setnewEmail] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [newrole, setnewRole] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [users, setUsers] = useState([]);
  const UpdateUsers = async(id) => {
    //{object}

    Axios.put(`http://localhost:3001/user/updateUserss/${id}`, {
        firstname: newfirstname,
        lastname: newlastname,
        email: newemail,
      password: newpassword,
      role: newrole,
      
      _id: id.id,
    }).then(async(response) => {
        console.log(response.data)
        setUsersList(
            usersList.map((val) => {
            return val._id === id
              ? { _id: val._id, firstname: newfirstname, lastname: newlastname, email: newemail, password: newpassword , role: newrole }
              : val;
          })
        );
      });
    };
    const getUsers = async(id) => {
        Axios.get(`http://localhost:3001/user/${id}`).then(async (res) => {
            setUsers(res.data);
        });
      };
    
      useEffect(() => {
        UpdateUsers(id)
       
        
        if (id) {
           
            getUsers(id)
        }
        
        
      }, [id]);

  return(
    <div >  <center><div style={{marginBottom:"2%",marginTop:"2%"}}>Update User</div>
    <Form
   name="basic"
   initialValues={{ remember: true }}
   wrapperCol={{ span: 14 }}
   labelCol={{ span: 4 }}
   autoComplete="off"
 >
    <Form.Item
     label="Firstname"
     name="Firstname"
     rules={[{ required: true, message: 'Please input your Firstname!' }]}
   >
     <Input type="text" onChange={(e)=>{setFirstName(e.target.value)}} />
   </Form.Item>
   <Form.Item
     label="LastName"
     name="LastName"
     rules={[{ required: true, message: 'Please input your LastName!' }]}
   >
     <Input type="text" onChange={(e)=>{setnewLasteName(e.target.value)}}/>
   </Form.Item>
   <Form.Item
     label="email"
     name="email"
     rules={[{ required: true, message: 'Please input your LastName!' }]}
   >
     <Input type="email" onChange={(e)=>{setnewEmail(e.target.value)}}/>
   </Form.Item>
   <Form.Item
     label="Password"
     name="Password"
     rules={[{ required: true, message: 'Please input your LastName!' }]}
   >
     <Input  type="Password" onChange={(e)=>{setnewPassword(e.target.value)}}/>
   </Form.Item>
   <Form.Item
     label="Role"
     name="Role"
     rules={[{ required: true, message: 'Please input your LastName!' }]}
   >
     <Input  type="text" onChange={(e)=>{setnewRole(e.target.value)}}/>
   </Form.Item>
    
      <Button onClick={(e)=>UpdateUsers(id)}>
                  Update Users
                </Button>
                </Form>
                </center>
      </div>
      
  )
}
export default UpdateUsers;