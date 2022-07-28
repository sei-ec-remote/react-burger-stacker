import React, {Component} from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


export default class BurgerPane extends Component {
     render() {
          return (
               <>
                    <h3>This is your handburger, everything you add will show down here.</h3>
                    <BurgerStack ingredients={this.props.ingredients} remove={this.props.remove} />
                    <ClearBurger removeAll={this.props.removeAll} />
               </>
          )
     }
}