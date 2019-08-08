import React, { Component } from 'react'
import {Link,Redirect  } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


export default class SignUp extends Component {

    state={
        name:'',
        mobile:'',
        email:'',
        password:'',
        isLoading:false
    }


    apiCall=()=>{
        axios.post('http://127.0.0.1:5000/signup',this.state)
        .then(res=>{
           const jsonData=res.data
          
           Swal.fire({
            type: 'success',
            title: jsonData.message,
            showConfirmButton: false,
            timer: 3000
          })
          setTimeout(() => {
            this.setState({
                isLoading:jsonData.status,
                name:'',
                mobile:'',
                email:'',
                password:'',
            })
          }, 3000);

          

        }).catch(error=>{
            console.log(error)
        })
    }


    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        this.apiCall()
    }


    render() {
        const {isLoading,name,mobile,email,password}=this.state
        
        if(isLoading){
            return <Redirect to='/login'  />
        }

        return (
          <div className="container-fluid mt-5 pt-5">
            
            <div className="row">
               <div className="col-md-4 col-sm-4 col-xs-12"></div>
               <div className="col-md-4 col-sm-4 col-xs-12">

                <div className="card shadow-sm p-3 mb-5 bg-white rounded ">
                    <div className="card-body">
                        <h3 className="card-title">SignUp</h3>
                        <form className='form' onSubmit={this.submitHandler}>
                          
                            <div className="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name"
                                      name='name' value={name} onChange={this.changeHandler}
                                 />
                            </div>


                            <div className="form-group">
                                <label for="mob">Mobile</label>
                                <input type="number" className="form-control" id="mob" placeholder="Enter mobile no"
                                name='mobile' value={mobile} onChange={this.changeHandler}
                                 />
                            </div>

                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email id"
                                name='email' value={email} onChange={this.changeHandler}
                                 />
                            </div>

                            <div className="form-group">
                                <label for="pws">Password</label>
                                <input type="password" className="form-control" id="pws" placeholder="Enter password"
                                name='password' value={password} onChange={this.changeHandler}
                                 />
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
