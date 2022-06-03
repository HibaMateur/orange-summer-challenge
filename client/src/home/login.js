/* eslint-disable */
import React, { Fragment, useEffect, useState,useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {Container,Row,Col,Form,FormGroup,Label,Input} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import Cookies from 'js-cookie';

      

const Popup = () => {
  
  
    const [modal, setModal] = useState();
    const [activeTab, setActiveTab] = useState('1');
    const [postData, setPostData] = useState({ email: '', password: ''});
 
    
    const toggle = () => {
        setModal(!modal)
    }
    const url = 'http://localhost:3001/user/forgetpass';

     const log= postData.email;

     const forgetpass = () => axios.post(url,{email:postData.email}).then(res => {
        console.log(log);
    console.log(res);
    console.log(res.data);
  }).catch(
    function (error) {
        console.log(postData.email);
      console.log('Show error notification!')
      return Promise.reject(error)
    }
  )
 
    
    
    const [user, setUser] = useState({ email: '', password: '', token:''});
    const [newUser, setNewUser] = useState({ email: '', password: '',ConfirmPass:'', firstname:'', lastName:'', role: ''});
    const [signinerr,SetSigninerr]=useState({status:'',message:''});
    const [badPass,setError]=useState({message:''});
  
    const [buttonValue,setButtonValue]=useState("");
    const signup =(e)=> {
        e.preventDefault();
        console.log("implement sign up here")
     
   
if(newUser.password == newUser.ConfirmPass)

        axios.post("http://localhost:3001/user/signup",{email:newUser.email,
        password:newUser.password,firstName:newUser.firstName,lastName:newUser.lastName,role:newUser.role}).then( res => {
            setError({...badPass,message:"aaa"})

        })
        .catch(function (error) {
            console.log(error.response.data);
           
        })
        else
        setError({...badPass,message:"Password confirmation doesnt match !"})

 
    }


    const signin =()=> {
        
        axios.post("http://localhost:3001/user/signin",{email:log,password:postData.password}).then( res => {
            setUser({...user,email:res.data.result.email,password:res.data.result.password,token:res.data.token});
            const current_user={email:res.data.result.email,
                                token:res.data.token,
                                firstName:res.data.result.firstname,
                                _id:res.data.result._id,
                                lastName:res.data.result.lastname,
                                expiration:res.data.result.active_until,
                                role:res.data.result.role,
                                hasImage:res.data.result.hasImage,
                           
                                

                            }
                            
                        setButtonValue("log out");     
                        toggle();   
                               // current_user.bro=res.data.result.token;
                              // setContext(current_user);
                                localStorage.setItem('user',JSON.stringify(current_user))
                                Cookies.set('userInfo',JSON.stringify(current_user)) 
            SetSigninerr({...signinerr})
        })
        .catch(function (error) {
            if (error.response)
            SetSigninerr({...signinerr})
           
        })
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("user")))
         setButtonValue(true)
         else
         setButtonValue(false) 
      },[]);

      const logout=() =>{
          localStorage.removeItem("user");
          setButtonValue(!buttonValue);
          Cookies.remove('userInfo');
       
          window.location.replace("/");
      }
 

    

    //

    return (
        <Fragment>
            {/* // <!-- Login-popup section start --> */}
            <section className="login-popup p-0" style={{overflow :'inherit !important',}} >
                <Container>
                    <Row>
                        <Col md="6" className="offset-md-3">
                            <div className="text-center">
                               
                                <Button className="popup-with-form btn btn-default primary-btn" hidden={buttonValue} onClick={() => { toggle(); }} >Login</Button>
                                <Button className="popup-with-form btn btn-default primary-btn"  hidden={!buttonValue} onClick={() => { logout(); }} >Logout</Button>
                                 

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* // <!-- Login-popup section end --> */}

            {/* // <!-- Login-modal section start --> */}
            <Modal isOpen={modal} toggle={toggle}>
                <a onClick={toggle} className="modal-no-header mt-3" style={{ width:"50px", left:"95%",fontSize:"1rem"}}>X</a>
                
                <ModalBody>
                    <div className="modal-body login-modal">
                        <Nav tabs className="nav nav-pills mb-5">
                            <NavItem>
                                <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                    Sign Up
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent className="tab-content" activeTab={activeTab}>
                            <TabPane tabId="1" aria-labelledby="pills-home-tab" className=""
                                role="tabpanel">
                                {/* <!-- login-form --> */}
                                
                                    <div className="form-row">
                                        <FormGroup className="col-md-12">
                                            <Label for="inputEmail">Email</Label>
                                            <Input className="form-control" id="inputEmail" placeholder="Email" type="email" value={postData.email} onChange={(e)=>setPostData({...postData,email: e.target.value})} />
                                            
                                        </FormGroup>
                                        <FormGroup className="col-md-12">
                                            <Label for="inputPassword05">Password</Label>
                                            <Input className="form-control" id="inputPassword05" placeholder="Password"
                                                type="password" value={postData.password} onChange={(e)=>setPostData({...postData,password: e.target.value})} />
                                        </FormGroup>
                                        <Label style={{color : 'red'}} for="inputEmail"  >{signinerr.message}</Label>

                                    </div>
                                    <button className="btn primary-btn btn-default text-uppercase"  onClick={()=>signin()} >Login</button>
                                    <button className="btn primary-btn btn-default text-uppercase" type='submit' onClick={()=>forgetpass()} >Forget password</button>
                                    
                               
                                {/* <!-- end login form --> */}
                            </TabPane>
                            <TabPane tabId="2" aria-labelledby="pills-profile-tab" className="" 
                                role="tabpanel">
                                {/* <!-- sign up form --> */}
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-md-12">
                                            <Label for="inputEmail05">Email</Label>
                                            <Input className="form-control" id="inputEmail05" placeholder="Email" type="email" value={newUser.email} onChange={(e)=>setNewUser({...newUser,email: e.target.value})}/>
                                        </FormGroup>
                                        <FormGroup className="col-md-6">
                                            <Label for="inputPassword04">Password</Label>
                                            <Input className="form-control" id="inputPassword04" placeholder="Password" value={newUser.password} onChange={(e)=>setNewUser({...newUser,password: e.target.value})}
                                                type="password" />
                                        </FormGroup>
                                        <FormGroup className="col-md-6">
                                            <Label for="inputPassword4">Confirm Password</Label>
                                            
                                            <Input className="form-control" id="inputPasswordConfirmation" placeholder="Password" value={newUser.ConfirmPass} onChange={(e)=>setNewUser({...newUser,ConfirmPass: e.target.value})}
                                                type="password" />
                                                <Label style={{color : 'red'}} for="errorMessage" >{badPass.message}</Label>
                                        </FormGroup>
                                    </div>
                                    <FormGroup>
                                        <Label for="inputAddress">Role</Label>
                                        <Input className="form-control" id="inputRole" placeholder="Role "value={newUser.role} onChange={(e)=>setNewUser({...newUser,role: e.target.value})}
                                            type="text" />
                                            <Label for="inputAddress">Name</Label>
                                        <Input className="form-control" id="inputNAme" placeholder="John" value={newUser.firstName} onChange={(e)=>setNewUser({...newUser,firstName: e.target.value})}
                                            type="text" />
                                            <Label for="inputAddress">Last name</Label>
                                        <Input className="form-control" id="inputLastName" placeholder="Doe" value={newUser.lastName} onChange={(e)=>setNewUser({...newUser,lastName: e.target.value})}
                                            type="text" />
                                    </FormGroup>

                                    <button className="btn btn-default primary-btn text-uppercase" onClick={(e)=>signup(e)} >Sign Up</button>
                                </Form>
                                {/* <!-- end sign up form --> */}
                            </TabPane>
                        </TabContent>
                    </div>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}


export default Popup;