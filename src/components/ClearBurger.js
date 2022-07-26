import React from "react";


const ClearBurger = ({onClear}) => {
    return (
        <button className="clear-burger" onClick={() =>{onClear()}}>Clear</button>
    )
}

export default ClearBurger