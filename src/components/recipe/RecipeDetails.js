import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { recipe } from '../../tempDetails'


export default class RecipeDetails extends Component {

    state = {
        recipe:recipe,
        url:`https://www.food2fork.com/api/get?key=3b8c0c55231e40eab6b63614acb55dfb&rId=${this.props.id}`,
    }

    async getRecipe() {
        try {
            const data = await fetch(this.state.url)
            const jsonData = await data.json()
            this.setState({
                recipe: jsonData.recipe
            })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
        this.getRecipe()
    }


    render() {
        const { image_url, title, publisher, publisher_url, source_url, ingredients} = this.state.recipe
        const { handleIndex } = this.props
        return (
            <Fragment>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize"
                                onClick={() => handleIndex(1)}
                            >back to product list</button>
                            <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>

                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
                            <a href={publisher_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mt-2 text-capitalize">Publisher webpage</a>
                            
                            <a href={source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mt-2 text-capitalize mx-3">Recipe URL</a>

                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">Ingredients</h2>
                                {
                                    ingredients.map((item, index) => {
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
