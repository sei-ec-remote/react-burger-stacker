import React from 'react'

const Ingredient = ({ ingredient, clickFunc }) => {
    // this component recieves one ingredient as a prop and displays said ingredient
    
        const { name, color } = ingredient
        return(
            <>
                <p style={{backgroundColor: color}} onClick={clickFunc}>{name}</p>
            </>
        )
    }



export default Ingredient