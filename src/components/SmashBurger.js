import React from 'react'

function SmashBurger(props) {
    return (
        <>
            <span>  
                <button className="clear-button" id="up" type="Submit" onClick={props.onClick}>Smash</button>
                <button className="clear-button" id="down" type="Submit" onClick={props.onClick}>Unsmash</button>
            </span>
        </>
    )
}

export default SmashBurger