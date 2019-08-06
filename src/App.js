import React from 'react';
import Navigation from './components/nav/Navigation'
import Services from './components/nav/Services'
import Course from './components/nav/Course'
import Team from './components/nav/Team'
import ContactUs from './components/nav/ContactUs'
import Login from './components/nav/Login'
import SignUp from './components/nav/SignUp' 
import Footer from './components/nav/Footer' 
import logo from './assets/img/logo.png'
import './css/App.css'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'

const Links=()=>(
<nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                <a href="/" className="navbar-brand">
                  <img src={logo} alt="" height='50' width='50'/> PopWood</a>
                <span className="navbar-text">Learn and Implement</span>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myMenu">
                    <ul className="navbar-nav ml-auto pl-5 custom-nav">
                        <li className="nav-item"><NavLink exact activeClassName="selected" to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/services" className="nav-link">Services</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/courses" className="nav-link">Courses</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/team" className="nav-link">Team</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/contact" className="nav-link">Contact</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/login" className="nav-link">Login</NavLink></li>

                    </ul>
                </div>
            </nav>
           
 
)

const App=()=>(
  <Router>
  <div>
     <Links/>
     
    <Route exact path="/" component={Navigation}/>
    <Route path="/services" component={Services}/>
    <Route path="/courses" component={Course}/>
    <Route path="/team" component={Team}/>
    <Route path="/contact" component={ContactUs}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    <Footer/>
  </div>
  </Router>
)

export default App;
