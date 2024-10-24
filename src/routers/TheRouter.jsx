import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard/Dashboard";
import Home from "../views/Home/Home";
import SignIn from "../views/SignIn/SignIn.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";
import HomeHeader from "../components/home-header/HomeHeader.jsx";

function TheRouter() {
    return (
        <Router>
            <HomeHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/SignIn" element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default TheRouter;
