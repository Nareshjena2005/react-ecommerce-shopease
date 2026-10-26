import {createContext,useState} from "react";
export const Autha = createContext();
export const AuthProvider = ({children})=>{
  const [registerdata,setRegisterdata]=useState(JSON.parse(localStorage.getItem("registerUser"))||[]);
  const [logindata,setLoginData]=useState(JSON.parse(localStorage.getItem("loginUser")));
  console.log("registerUser:",registerdata);
return <Autha.Provider value={{registerdata,setRegisterdata,logindata,setLoginData}}>{children}</Autha.Provider>
}