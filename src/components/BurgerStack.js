import React, { Component } from 'react' 

class BurgerStack extends Component {
    render () {
        // const burger = this.props.ingredients.map(item => {
        //     return(
        //         <h1 key={item.name}>{item.name}</h1>
        //     )
        // })

        const burger = this.props.ingredients.map((item, index) => 
            <div key={index}
            >{item}</div>
            )


        return (
            <div className= "burger">
                {burger}
            </div>
        )
    }
}

export default BurgerStack