import React, { Component } from 'react'
import '../../css/stylesheet.css'

export default class Services extends Component {
    render() {
        return (
            <div className="container text-center border-bottom mt-5" id="Services">
                <h2>Our Services</h2>
                <div className="row mt-4">
                    <div className="col-sm-4 mb-4">
                        <a href="#"><i class="fab fa-android fa-10x text-success"></i></a>
                        <h4 className="mt-4">Android Application</h4>
                    </div>
                    <div className="col-sm-4 mb-4">
                        <a href="#"><i class="fas fa-desktop fa-10x text-primary"></i></a>
                        <h4 className="mt-4">Web Application</h4>
                    </div>
                    <div className="col-sm-4 mb-4">
                        <a href="#"><i class="fas fa-database fa-10x text-info"></i></a>
                        <h4 className="mt-4">Database</h4>
                    </div>
                </div>
            </div>
        )
    }
}
