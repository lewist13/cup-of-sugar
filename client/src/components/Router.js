import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';

//Services
import { __GetItems } from '../services/ItemService'

//Components
import Navbar from "./NavBar";

//Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Browse from "../pages/Browse";
import ItemDetails from "../pages/ItemDetails";



function Router(props) {
  
  //State
  const [item, setItem] = useState([])
  const history = useHistory();



  //Functions

  const getAllItems = async () => {
    try {
        const data = await __GetItems()
        console.log('ROUTER', data)
        setItem(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    getAllItems()
}, [])



  return (
    <div>
      <Navbar></Navbar>

      <Switch>

        <Route exact path='/'><Home></Home></Route>

        <Route path="/items/all" component={() => (<Browse item={item} setItem={setItem} history={history}></Browse>)}/>

        <Route path="/items/:item_id" render={(props) => <ItemDetails location={props.location}></ItemDetails>}/>

        <Route path='/signin'><SignIn></SignIn></Route>

        <Route path='/signup'><SignUp></SignUp></Route>

        <Route path='/users/:user_id'><Profile></Profile></Route>

      </Switch>
    </div>
  );
}

export default Router;
