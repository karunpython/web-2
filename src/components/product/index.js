import React, { Component,Fragment } from 'react'
import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

export default class Product extends Component {
   
    state={
        search:''
    }


    handleChange =(e)=>{
        this.setState({
            search:e.target.value
        })
        console.log('handle chnage')
    }

    handleSubmit = (e)=>{
        const{search}=this.state
        e.preventDefault()
        console.log(search)

    }

    render() {
        return (
            <Fragment>
               <ProductList
                value={this.state.search}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />     
               {/* <ProductDetails id={123}/>      */}
            </Fragment>
        )
    }
}
