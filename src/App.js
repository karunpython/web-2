import React from 'react';
import Navigation from './components/nav/Navigation'
import Recipe from './components/recipe'
import NearBy from './components/nearby'
import Services from './components/nav/Services'
import Course from './components/nav/Course'
import Team from './components/nav/Team'
import ContactUs from './components/contacts/ContactUs'
import Login from './components/authentication/Login'
import SignUp from './components/authentication/SignUp'
import Footer from './components/nav/Footer'
import NavBar from './components/menu/NavBar'
import UserList from './components/user/UserList'
import UserDetails from './components/user/UserDetails'
import NoMatch404 from './components/menu/NoMatch404'
import Product from './components/product'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Navigation} />
        <Route exact path="/users" component={UserList} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/nearby" component={NearBy} />
        <Route path="/product" component={Product} />
        <Route path="/services" component={Services} />
        <Route path="/courses" component={Course} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/404" component={NoMatch404} />
        <Route path='/users/:uid' component={UserDetails}/>
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App;
