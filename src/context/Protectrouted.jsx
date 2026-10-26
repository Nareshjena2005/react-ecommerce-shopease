import React from 'react'
import {Outlet,Navigate} from 'react-router';
import  { useContext} from 'react';
import { Autha } from "../context/Authcontext";
const Protectrouted = () => {
  const {logindata}=useContext(Autha)
  if(!logindata){
     return <Navigate to={"/"} replace/>
  }
  return <Outlet/>
  
}

export default Protectrouted
