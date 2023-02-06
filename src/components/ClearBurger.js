import React from 'react'

function ClearBurger(props) {
    // Render button to clear burgers
    return (
        <>
            <button className="clear-button" type="Submit" onClick={props.onClick}>X</button>
        </>
    )
}

export default ClearBurger