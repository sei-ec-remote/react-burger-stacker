import React, { useEffect } from 'react';

const BurgerPane = (props) => {
    // useEffect(() => {
    //     console.log('hit')
    // }, [props.burgIngredients])

    const clickedIngredients = props.burgIngredients.map((n, i) => {
        // console.log("burgIngredients", props.burgIngredients);
        return <li
            key={i}
            style={{ backgroundColor: n.color }}
            onClick={() => props.removeFromStack(i)}
        > {n.name}</li >
    })
    return (
        <>
            <div className="column">
                <h2>Yer Berrgher</h2>
                <ul
                    className="items"
                >
                    {clickedIngredients}
                </ul>
                <button onClick={() => props.clearBurg()}>Clear Burg</button>
            </div>
        </>

    )
}

export default BurgerPane