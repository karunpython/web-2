import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class ProductDetails extends Component {
      
    state={
        avatar: 'https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg',
        title: 'Xiaomi Redmi 7',
        pulisher: 'Redmi ',
        source_url: 'no',
        produc_id: 'm1',
        items:['red','pink','blue','white','black','yellow']
    }

    render() {
        const {avatar,title,pulisher,source_url,items}=this.state
        const {handleIndex}=this.props
        return (
            <Fragment>
                <div className="container mt-5 pt-5">
                    <div className="row">
                           <div className="col-10 mx-auto col-md-6 my-3">
                               <button type="button" className="btn btn-warning mb-5 text-capitalize"
                               onClick={()=>handleIndex(1)}
                               >back to product list</button>
                               <img src={avatar} className="d-block w-100" alt="product"/>
                           </div>

                           <div className="col-10 mx-auto col-md-6 my-3">
                               <h6 className="text-uppercase">{title}</h6>
                              <h6 className="text-warning text-capitalize text-slanted">provided by {pulisher}</h6> 
                                <Link to={source_url} className="btn btn-primary mt-2 text-capitalize">Publisher webpage</Link>   
                                <Link to={source_url} className="btn btn-success mt-2 text-capitalize mx-3">Product url</Link>   
                           
                           
                             <ul className="list-group mt-4">
                                 <h2 className="mt-3 mb-4">Ingredients</h2>
                                 {
                                  items.map((item,index)=>{
                                     return (
                                         <li key={index} className="list-group-item text-slanted">
                                            {item}
                                         </li>
                                     )
                                  })
                                 }

                             </ul>
                           
                           </div>



                    </div>

                </div>
                
            </Fragment> 
        )
    }
}
