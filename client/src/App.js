
import './App.css';
import { BrowserRouter, Route, Routes   } from "react-router-dom";
import NavBar from './navBar/navBar';
import Home from './home/home';

import Popup from './home/login';
import ListItems from './items/items';
import AddItemss from './items/add-items';
import UpdateItems from './items/update-items';
import ShowItems from './items/show-items';
import ListUsers from './manager/list-users';
import AddUserss from './manager/add-user';
import UpdateUsers from './manager/update-user';
import ShowUsers from './manager/show-user';




function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Popup />
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
    
        
        <Route path="/items/list" exact element={<ListItems />}></Route>
        <Route path="/user/list" exact element={<ListUsers />}></Route>
        <Route path="/items/add" exact element={<AddItemss />}></Route>
        <Route path="/user/add" exact element={<AddUserss />}  ></Route>
        <Route path="/items/edit/:id" exact element={<UpdateItems/>}></Route>
        <Route path="/user/edit/:id" exact element={<UpdateUsers/>}></Route>
        <Route path="/items/show/:id" exact element={<ShowItems/>}></Route>
        <Route path="/user/show/:id" exact element={<ShowUsers/>}></Route>
      
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
