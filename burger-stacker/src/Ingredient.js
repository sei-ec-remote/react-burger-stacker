import React from 'react'


// buttons here
// props is ALWAYS passed, you can explicit to ingredients instead of just {}
// its like props.
const Ingredient = ({ingredient,clickFunc,itemKey}) => {  // descontructing ingredient from Props
    
        // I want to render a BG color
        // I want to redner the name of the ing

        // destruct: if ther is a key with this 'name', extract it.

        // not using state, but using props
        // deconstructing in here
        const { name, color } = ingredient
    

        return (
            // inline styling. key name pair. 
            <p style={{backgroundColor: color}}
                onClick={clickFunc} // waiting until a click event happens. Getting the event from onClick. Use this for remove AND ADD
                    id={itemKey}>
                {name}
            </p>
        )

}



export default Ingredient