import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import MainPage from "../MainPage/mainpage";
import Mjerenja from "./mjerenja";

const ProtectedRoute = ({ elementPath }) => {
  console.log(auth.currentUser);
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  if (!auth.currentUser) {
    //navigate('/mainpage')

    navigate("/mainpage");

    /* return (
      <div
        style={{ backgroundColor: "green", width: window.innerWidth, height: window.innerHeight }}
      >
        <p>You are not logged</p>
        
      </div>
    ); */
  }

  return elementPath;
};
export default ProtectedRoute;
