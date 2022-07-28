import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
     return (
          <>
               <h3>This is your handburger, everything you add will show down here.</h3>
               <BurgerStack ingredients={props.ingredients} remove={props.remove} />
               <ClearBurger removeAll={props.removeAll} />
          </>
     )
}

export default BurgerPane