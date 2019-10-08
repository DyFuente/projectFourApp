import React from 'react';
import {Link} from 'react-router-dom'

export default class SingleUserRecipePage extends Component {

    state = {
        //this is where I'm storing my recipes, inside this array
        entry: []
    }

    //When the component is ready to be displayed its going to run the code in here first
    componentDidMount() {
        this.getSingleEntry()
    }

    
    getSingleEntry = () => {
        //the axios call is a an AJAX request, to get all the recipes and store them state
        axios.get(`/api/users/${this.props.match.params.userId}/recipes/getAllRecipesForOneUser`)
            .then(results => {
                console.log(results.data)
                this.setState({ recipes: results.data })
            })
    }


    render() {
        return (
            //I'm using the render method to get all the recipes for one user
            <div>
                <h1 style={{color: "white"}}>This is your Recipe Page!</h1>
                            <br/>
                {this.state.recipes.map(recipe => {
                    return (
                        <div>
                            <h3>{recipe.recipeName}</h3>
                            <h5>Description:</h5>
                            <p> {recipe.recipeDescription}</p>
                            <h5>Ingredients:</h5>
                            <p>{recipe.recipeIngredients}</p>
                    <Link to={"/single-recipe/recipe._id/recipes"}>
                            <button>Update Recipe</button>
                    </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
