import React, { Component } from 'react'
import '../../css/stylesheet.css'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid mt-5 pt-5">
            
            <div className="row">
               <div className="col-md-4 col-sm-4 col-xs-12"></div>
               <div className="col-md-4 col-sm-4 col-xs-12">

                <div className="card shadow-sm p-3 mb-5 bg-white rounded ">
                    <div className="card-body">
                        <h3 className="card-title">Login</h3>
                        <form className='form'>
                          

                            <div className="form-group">
                                <label for="mob">Mobile</label>
                                <input type="number" className="form-control" id="mob" placeholder="Enter mobile no" />
                            </div>

                        
                            <div className="form-group">
                                <label for="pws">Password</label>
                                <input type="password" className="form-control" id="pws" placeholder="Enter password" />
                            </div>


                            <button className="btn btn-primary btn-block mt-4 mb-3 ">Login</button>

                            <hr></hr>                              
                             <span>Create new an account? <Link to="/signup" className="text-primary">Sign up</Link> </span>
                        </form>
                    </div>
                </div>
                 
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
            </div>
        )
    }
}
