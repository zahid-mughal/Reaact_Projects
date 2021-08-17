import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../commonComponents/header/Header';
import Footer from '../commonComponents/footer/Footer';
import Signin from '../modules/auth/signIn/Signin'
import Signup from '../modules/auth/signUp/Signup'
import Home from '../modules/home/Home'
import LandingPage from '../modules/landingPage/LandingPage'



export default function Navigation() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/signin">
                        <Signin />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>



                </Switch>

                <Footer />
            </Router>

        </div>
    )
}