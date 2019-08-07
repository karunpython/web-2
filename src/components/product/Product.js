import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    
    render() {
        const { avatar, title, pulisher, source_url, produc_id } = this.props.product
        return (
            <Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={avatar} className="img-card-top" style={{ height: "14rem" }} alt="product" />
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">provided by {pulisher} </h6>
                        </div>

                        <div className="card-footer">
                            <button type="button" className="btn btn-primary text-capitalize">details</button>
                             <Link to={source_url} className="btn btn-success mx-2 text-capitalize">Product URL</Link>
                        </div>

                       

                    </div>
                </div>
            </Fragment>
        )
    }
}
