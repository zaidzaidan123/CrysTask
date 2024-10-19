import "./App.css";
import AppBar from "./components/dashboard-appbar/Appbar";
import Dashboard from "./views/Dashboard/Dashboard";
import Home from "./views/Home/Home";
import HomeHeader from "./components/home-header/HomeHeader.jsx";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
      <>
        <Router>
          <HomeHeader/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/SignIn" element={<Dashboard />} />
          </Routes>
        </Router>
      </>
  )
}

export default App;
