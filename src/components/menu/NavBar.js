import React from 'react'
import '../../css/menu.css'
import logo from '../../assets/img/logo.png'
import {NavLink} from 'react-router-dom'



export default function Menu() {
    return (
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
                        <li className="nav-item"><NavLink activeClassName="selected" to="/recipe" className="nav-link">Recipe</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/product" className="nav-link">Product</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/users" className="nav-link">Users</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/services" className="nav-link">Services</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/courses" className="nav-link">Courses</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/team" className="nav-link">Team</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/contact" className="nav-link">Contact</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="selected" to="/login" className="nav-link">Login</NavLink></li>
                    </ul>
                </div>
            </nav>
    )
}
