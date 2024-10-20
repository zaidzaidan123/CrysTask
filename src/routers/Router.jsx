import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/Sign-up';
//import { landingPage} from './pages/landingPage';
export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <SignIn/>
                </Route>
                <Route path="/:signUpId">
                <SignUp/>
                </Route>
                <Route path="/pages/App.jsx">
                    <app/>
                </Route>
            </Switch>
        </Router>
    )
}