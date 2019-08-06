import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class SignUp extends Component {
    render() {
        return (
          <div className="container-fluid mt-5 pt-5">
            
            <div className="row">
               <div className="col-md-4 col-sm-4 col-xs-12"></div>
               <div className="col-md-4 col-sm-4 col-xs-12">

                <div className="card shadow-sm p-3 mb-5 bg-white rounded ">
                    <div className="card-body">
                        <h3 className="card-title">SignUp</h3>
                        <form className='form'>
                          
                            <div className="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>


                            <div className="form-group">
                                <label for="mob">Mobile</label>
                                <input type="number" className="form-control" id="mob" placeholder="Enter mobile no" />
                            </div>

                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email id" />
                            </div>

                            <div className="form-group">
                                <label for="pws">Password</label>
                                <input type="password" className="form-control" id="pws" placeholder="Enter password" />
                            </div>


                            <button className="btn btn-primary btn-block mt-4 mb-3 ">SignUp</button>

                            <hr></hr>                              
                             <span>Aready have an account? <Link to="/login" className="text-primary">Sign in</Link> </span>
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
