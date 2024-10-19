//import { Routes } from './src/Router';
import Button from '@mui/material/Button';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Dashboard from '../Dashboard/Dashboard';
// import Preferences from '../Preferences/Preferences';
//import Sign-in from './views/Sign-in';
//import Sign-up from './views/Sign-up';
import './App.css'
import "./App.css";
//import Todo from "./components/Todo";
import SignIn from "./views/Sign-in";
import SignUp from "./views/Sign-up"
import { FormatItalic } from "@mui/icons-material";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
{/*import Employee from "./Employee";
import Customer from "./Customer";
import UserInfo from "./UserInfo";*/}


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const goToSignUp = () => {
    navigate("/signup");
  }
  const goToSignIn= () => {
    navigate("/signin");
  }
  return (
    <>
          
          <div>
          <h1>CrysTask!</h1>
      <button onClick={() => goToSignIn()}type="submit" className="btn btn__primary btn__lg"> Sign In
       {/* <SignIn /> */}

      </button>
      <button onClick={() => goToSignUp()} type="submit" className="btn btn__primary btn__lg"> Sign Up
       {/* <SignUp />
        Sign up */}
      </button>
        
      </div>
      
      <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
      </Routes>
   </>
  )
}

export default App
