import React, { Component, Fragment } from 'react'
import RecipeView from './RecipeView'
import RecipeSearch from './RecipeSearch'

export default class RecipeList extends Component {

    render() {
        const { recipes, handleDetails, value, handleChange, handleSubmit } = this.props
        return (
            <Fragment>
                <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Recipe List</h1>
                        </div>
                    </div>

                    <div className="row">
                        {recipes.map(recipe => {
                            return <RecipeView key={recipe.recipe_id}
                                recipe={recipe}
                                handleDetails={handleDetails}
                            />
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }

}
