import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sign-in } from './pages/Sign-in';
import { Sign-up } from './pages/Sign-up';
//import { landingPage} from './pages/landingPage';
export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Sign-in/>
                </Route>
                <Route path="/:signUpId">
                <Sign-up/>
                </Route>
                <Route path="/pages/App.jsx">
                    <app/>
                </Route>
            </Switch>
        </Router>
    )
}