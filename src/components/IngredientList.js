import React, { Component } from 'react'
import Ingredients from './Ingredients'


class IngredientList extends Component {
	// state values
	// fruits to display
	// fliter value
	state = {
		// I want  to get my fruits to be diplays via props, this should be an array
		ingredientsToDisplay: this.props.ingredients,
        // burgerIngredients: this.props.new
		filterValue: '',
	}

	// make a method that will intake user info and filter the fruits bassed on that user info
	// intake an event
	// handleFilterChange = (e) => {
	// 	// info is going to be comming from an form or input
	// 	// everytime a form is submitted you need to prevent the default action of the page refresh
	// 	// still have to do this in React land
	// 	e.preventDefault()

	// 	// save the user input in a variable
	// 	const filterValue = e.target.value
	// 	// filter all of our fruits - return us a new array
	// 	const filteredIngredientList = this.props.ingredients.filter((ingredient) => {
	// 		// 'abc' !== 'ABC' - transform our user input to lowercase
	// 		// includes - compair our user input to see if it matches any of our fruits
    //         return ingredient.toLowerCase().includes(filterValue.toLowerCase())
	// 	})

    //     this.setState(() => {
    //         return {
    //             ingredientsToDisplay: filteredIngredientList,
    //             filterValue
    //         }
    //     })
	// }

	render() {
		return (
            <>
                {/* in one child component I am getting user input
                in anouther child component I am rendering the fruits and the filter fruits */}
                {/* <Input value={this.state.filterValue} onChange={this.handleFilterChange}/> */}
                <Ingredients ingredients={this.state.ingredientsToDisplay}/>
            </>
        )
	}
}

export default IngredientList

