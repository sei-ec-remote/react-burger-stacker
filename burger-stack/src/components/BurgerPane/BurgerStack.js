import {useState} from 'react'
import Ingredients from '../IngredientsList/Ingredients'

function BurgerStack () {
    const [stack, setStack] = useState([ {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'}])
    return (
        <>
        {stack.map((item, idx) =><p>{item.name}</p>)}
        </>
    )
}
export default BurgerStack