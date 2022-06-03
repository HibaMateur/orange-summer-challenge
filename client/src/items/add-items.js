/* eslint-disable */
import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button } from 'antd';

const AddItemss = () => {


 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const addItems = () => {
    //{object}

    Axios.post("http://localhost:3001/items/addItems", {
      name: name,
      description: description,
      price: price,
      stock: stock,
    }).then(() => {
      console.log("success");
    });
  };
  return(
         
    <div >  <center><div style={{marginBottom:"2%",marginTop:"2%"}}>Add Items</div>
    <Form
   name="basic"
   initialValues={{ remember: true }}
   wrapperCol={{ span: 14 }}
   labelCol={{ span: 4 }}
   autoComplete="off"
 >
    <Form.Item
     label="name"
     name="name"
     rules={[{ required: true, message: 'Please input your name!' }]}
   >
     <Input type="text" onChange={(e)=>{setName(e.target.value)}} />
   </Form.Item>
   <Form.Item
     label="descr"
     name="description"
     rules={[{ required: true, message: 'Please input your description!' }]}
   >
     <Input type="text" onChange={(e)=>{setDescription(e.target.value)}} />
   </Form.Item>
   <Form.Item
     label="stock"
     name="stock"
     rules={[{ required: true, message: 'Please input your name!' }]}
   >
     <Input type="number" onChange={(e)=>{setStock(e.target.value)}} />
   </Form.Item>
   <Form.Item
     label="price"
     name="price"
     rules={[{ required: true, message: 'Please input your name!' }]}
   >
     <Input type="number" onChange={(e)=>{setPrice(e.target.value)}} />
   </Form.Item>
    
    
     
     
      <Button onClick={addItems}>
                  Add Items
                </Button>
                </Form>
                </center>
      </div>
  )
}
export default AddItemss;