import React, { Component, Fragment } from 'react'
import Product from './Product'
import ProductSearch from './ProductSearch'

export default class ProductList extends Component {
    state = {
        products:[
            {
                avatar: 'https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg',
                title: 'Xiaomi Redmi 7',
                pulisher: 'Redmi ',
                source_url: 'no',
                produc_id: 'm1'
            },
            {
                avatar: 'https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg',
                title: 'Xiaomi Redmi 7',
                pulisher: 'Redmi ',
                source_url: 'no',
                produc_id: 'm1'
            },
            {
                avatar: 'http://www.zenmobile.in/zen-new/wp-content/uploads/2017/04/cinemax-prime-banner-mobile.png',
                title: 'zen Mobile ',
                pulisher: 'Asus ',
                source_url: 'no',
                produc_id: 'm2'
            },{
                avatar: 'https://www.compareprix.in/images/product/large/Vivo%20V11%20Pro-large.jpg',
                title: 'Vivo',
                pulisher: 'Redmi ',
                source_url: 'no',
                produc_id: 'm1'
            },
            {
                avatar: 'https://mobile.panasonic.com/content/products/eluga-x1-pro/gallery/panasonic-eluga-x1-pro-smartphone.jpg',
                title: 'Panasonic Eluga X1 Pro',
                pulisher: 'Redmi ',
                source_url: 'no',
                produc_id: 'm1'
            },
            {
                avatar: 'https://n4.sdlcdn.com/imgs/g/z/o/4-449aa.jpg',
                title: 'JIO MOBILE (Black, 4G)',
                pulisher: 'Asus ',
                source_url: 'no',
                produc_id: 'm2'
            }
        
        ]
    }

    render() {
        const {value,handleChange,handleSubmit} = this.props
        return (
            <Fragment>
                <ProductSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Product List</h1>
                        </div>
                    </div>  
                    
                    <div className="row">
                       {this.state.products.map(product=>{
                           return <Product key={product.produc_id} product={product}/>
                       })}
                    </div>
                </div>
            </Fragment>
        )
    }
}
