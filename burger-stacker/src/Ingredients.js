
import React from "react";
// this is a child component of ingredientslist 
// receives the props of an indiviual ingredient
// ingredient ---> color and name


const Ingredients = (props) => {

        // we want to map over the foodItems from props'
        // we want to display a list item for each of them
        // f is food, i is index
        // we can use deconstruction in order to access the colors and name within
        // the props
        const { name, color } = props.ingredients
        // console.log('this si the name props ', name)
        // console.log('this si the  color props ', color)
        return (
            <strong>
                <p style={{ backgroundColor: color }}
                    id={props.itemKey}
                    onClick={props.clickFunction}
                >
                    {name}
                </p>
            </strong>
        )
}
export default Ingredients
