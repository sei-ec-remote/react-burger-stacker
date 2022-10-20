import React from 'react'

const Clear = (props) => {
    return (
        <div className="clear">
            <button onClick={props.clearHandler}>Clear</button>
        </div>
    )
}

export default Clear