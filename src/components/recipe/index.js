import React, { Component, Fragment } from 'react'
import RecipeDetails from './RecipeDetails'
import RecipeList from './RecipeList'
import {recipes} from '../../tempList'

export default class Recipe extends Component {
    state = {
        recipes: recipes,
        url: "https://www.food2fork.com/api/search?key=3b8c0c55231e40eab6b63614acb55dfb",
        base_url:"https://www.food2fork.com/api/search?key=3b8c0c55231e40eab6b63614acb55dfb",
        pageIndex: 1,
        details_id: 35382,
        search: '',
        query:'&q='
    }

    // async getRecipes() {
    //     try {
    //         const data = await fetch(this.state.url)
    //         const jsonData = await data.json()
    //         this.setState({
    //             recipes: jsonData.recipes
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // componentDidMount(){
    //     this.getRecipes()
    // }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
        console.log('handle chnage')
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {base_url,query,search}=this.state
        console.log("submit")
        console.log(this.state.url)


        this.setState(()=>{
            return {url:`${base_url}${query}${search}`,search:""}
        },()=>{
            this.getRecipes()
        })


    }

    displayPage = (index) => {
        switch (index) {
            default:
            case 1:
                return (<RecipeList
                    recipes={this.state.recipes}
                    value={this.state.search}
                    handleDetails={this.handleDetails}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />)
            case 0:
                return (<RecipeDetails
                    id={this.state.details_id}
                    handleIndex={this.handleIndex}
                />)
        }
    }

    handleIndex = index => {
        this.setState({
            pageIndex: index
        })
    }

    handleDetails = (index, id) => {
        this.setState({
            pageIndex: index,
            details_id: id
        })
    }


    render() {
        console.log(this.state.url)
        console.log(this.state.recipes)
        return (
            <Fragment>
                {this.displayPage(this.state.pageIndex)}
            </Fragment>
        )
    }
}
