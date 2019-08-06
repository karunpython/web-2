import React from 'react'
import '../../css/stylesheet.css'


function ContactUs() {
    return (
        <div className="container mt-5 pt-5" id="Contact">
            <h2 className="text-center mb-4">Contact US</h2>

            <div className="row">
                <div className="col-lg-6 col-md-8">
                    <form action="#" method="post">
                        <input className="form-control" name="name" placeholder="Name" /><br></br>
                        <input className="form-control" name="phone" placeholder="Phone" /><br></br>
                        <input className="form-control" name="email" placeholder="E-mail" /><br></br>
                        <textarea className="form-control" name="text" placeholder="How can we help you?" /><br></br>
                        <input className="btn btn-primary" type="submit" value="Send" /><br></br>
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

export default ContactUs
