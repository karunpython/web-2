import React, { Component,Fragment } from 'react'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

export default class Product extends Component {
   
    state={
        pageIndex:1,
        details_id:33,
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

    displayPage =(index)=>{
        switch(index){
            default:
            case 1:
                return(<ProductList value={this.state.search}
                    handleDetails={this.handleDetails}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    /> )  
            case 0:
                return(<ProductDetails 
                       id={this.state.details_id}
                       handleIndex={this.handleIndex}
                    />)          
        }
    }

    handleIndex = index =>{
        this.setState({
            pageIndex:index
        })
    }

    handleDetails=(index,id)=>{
        this.setState({
            pageIndex:index,
            details_id:id
        })
    }


    render() {
        return (
            <Fragment>
              {this.displayPage(this.state.pageIndex)}
            </Fragment>
        )
    }
}
