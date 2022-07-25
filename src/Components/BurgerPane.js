import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = ({ingredients, onClear}) => {
  return (
    <div className="grid-child">
        <BurgerStack ingredients={ingredients} />
        <div>

        </div>
        <div className = "BurgerStackingLabel">
        Burger Stacking Area
        </div>
        <ClearBurger onClear={onClear}/>
    </div>

  )
}

export default BurgerPane
