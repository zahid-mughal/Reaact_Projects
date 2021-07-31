import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../components/header'
import Home from '../components/home'
import Company from '../components/company'
import Footer from '../components/footer'
import About from '../components/about'
// import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/navbar'

function Routing() {
    return(
        <Router>
             <Header />
             <Navbar />
            <Switch>
                
                
                <Route exact path="/">
                   <Home />
                </Route>
                <Route path="/companya">
                    <Company />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
               
            </Switch>
            <Footer />
        </Router>
    ) 
}
export default Routing;