import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import MainPage from "../MainPage/mainpage";
import Mjerenja from "./mjerenja";

const ProtectedRoute = ({ isLogged, children }) => {

    console.log(auth.currentUser)

    const navigate = useNavigate()

    
        if(!auth.currentUser) {
            navigate('/mainpage')
       }
    
  
    
  return <Mjerenja/>


};
export default ProtectedRoute;
