import React, { Component } from 'react';


export default class BurgerPane extends Component {

    render() {
        // 4. console.log the ingredient list being passed down
        console.log('here:::', this.props.burgIngredients)
        const clickedIngredients = this.props.burgIngredients.reverse().map((n, i) => {
            return <li
                key={i}
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
                    <button onClick={() => this.props.clearBurg()}>Clear Berg</button>
                </div>
            </>

        )
    }
}
