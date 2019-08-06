import React from 'react';
import Navigation from './components/nav/Navigation'
import Services from './components/nav/Services'
import Course from './components/nav/Course'
import Team from './components/nav/Team'
import ContactUs from './components/nav/ContactUs'
import Login from './components/nav/Login'
import SignUp from './components/nav/SignUp'
import Footer from './components/nav/Footer'
import Menu from './components/menu/Menu'
import UserList from './components/user/UserList'
import NoMatch404 from './components/menu/NoMatch404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Navigation} />
        <Route path="/users" component={UserList} />
        <Route path="/services" component={Services} />
        <Route path="/courses" component={Course} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={NoMatch404}/>
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App;
