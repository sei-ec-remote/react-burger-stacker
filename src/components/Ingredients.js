import React, {Component} from 'react'

class Burger extends Component {
    render() {
        let foods = this.props.theBurger.map((item, index) => {
            return <Ingredients ingr={item} key={index} />
          })
        return (
            <>
                <div className='ingredients'>
                    These are Ingredients
                </div>
            </>
        )
    }
}

export default Burger

