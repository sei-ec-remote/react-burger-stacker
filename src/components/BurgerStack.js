import React, { Component } from 'react' 

class BurgerStack extends Component {
    render () {
        const burger = this.props.ingredients.map(item => {
            return(
                <h1 key={item.name}>{item.name}</h1>
            )
        })


        return (
            <div className= "burger">
                {burger}
                <h1>{'Top Bun'}</h1>
                <h1>{'Bottom Bun'}</h1>
            </div>
        )
    }
}

export default BurgerStack