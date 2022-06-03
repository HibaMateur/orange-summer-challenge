import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button } from 'antd';

const AddUserss = () => {


 
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const addUsers = () => {
    //{object}

    Axios.post("http://localhost:3001/user/addUserr", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      role: role,
    }).then(() => {
      console.log("success");
    });
  };
  return(
    <div >  <center><div style={{marginBottom:"2%",marginTop:"2%"}}>Add User</div>
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
     <Input type="text" onChange={(e)=>{setLastName(e.target.value)}}/>
   </Form.Item>
   <Form.Item
     label="email"
     name="email"
     rules={[{ required: true, message: 'Please input your LastName!' }]}
   >
     <Input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
   </Form.Item>
   <Form.Item
     label="Password"
     name="Password"
     rules={[{ required: true, message: 'Please input your LastName!' }]}
   >
     <Input  type="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
   </Form.Item>
   <Form.Item
     label="Role"
     name="Role"
     rules={[{ required: true, message: 'Please input your LastName!' }]}
   >
     <Input  type="text" onChange={(e)=>{setRole(e.target.value)}}/>
   </Form.Item>
    
      <Button onClick={addUsers}>
                  Add Users
                </Button>
                </Form>
                </center>
      </div>
  )
}
export default AddUserss;