import React from 'react'

function BurgerStack (props) {
    const burger = props.burger.map((item, index) => {
        return (
            <div className='burger' key={index}>
                <div style={{backgroundColor: `${item.color}`}} onClick={props.remove}>{item.name}</div>
            </div>
        )
    })
    return (
        <div>
            {burger}
        </div>
    )
}

export default BurgerStack