import './App.css'
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";



function App() {
  
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
       

      </button>
      <button onClick={() => goToSignUp()} type="submit" className="btn btn__primary btn__lg"> Sign Up
       
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
