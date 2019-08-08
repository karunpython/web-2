import React,{Component} from 'react'
import '../../css/stylesheet.css'
import axios from 'axios'

export default class ContactUs extends Component {

    state={
        name:'',
        mobile:'',
        email:'',
        message:'',
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:5000/contacts',this.state)
        .then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
    }

    render() {
        const {name,mobile,email,message}=this.state
        return (
            <div className="container mt-5 pt-5" id="Contact">
                <h2 className="text-center mb-4">Contact US</h2>
    
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <form onSubmit={this.submitHandler} >
                            <input className="form-control" name="name" placeholder="Name" value={name} onChange={this.changeHandler} /><br></br>
                            <input className="form-control" name="mobile" placeholder="Phone" value={mobile} onChange={this.changeHandler} /><br></br>
                            <input className="form-control" name="email" placeholder="E-mail" value={email} onChange={this.changeHandler} /><br></br>
                            <textarea className="form-control" name="message" placeholder="How can we help you?" value={message} onChange={this.changeHandler} /><br></br>
                            <button className="btn btn-primary" type="submit">Send</button><br></br>
                        </form>
                    </div>
     
                    <div className="col-lg-6 col-md-4 text-center">
                        <strong>Headquarter:</strong> <br></br>
                        popwood Pvt Ltd, <br></br>
                        Harmu, Bihar <br></br>
                        Bihar - 821108 <br></br>
                        Phone: +00000000 <br></br>
                        <a href="https://www.popwood.com" >www.popwood.com</a> <br></br>
    
                            <strong>Kolkata Branch:</strong> <br></br>
                            Popwood Dev Pvt Ltd, <br></br>
                            Sec V, Banglore <br></br>
                            WB - 804002 <br></br>
                            Phone: +00000000 <br></br>
                            <a href="https://www.popwood.com" >www.popwood.com</a> <br></br>
                        </div>    
    
                </div>
            </div>
        )    
    }
}

