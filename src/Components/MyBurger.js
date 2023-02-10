
import Ingredient from "./Ingredient"

const MyBurger = (props) => {

    let burgerBits = props.ing.map((ing, i) => (
            <Ingredient 
                key={i}
                ingredient={ing}
                clickFunc={props.remove}
            />
    ))

    return (
        <section className='pane'>
            <h3>My Burger</h3>
            <ul>
                { burgerBits }
            </ul>
            <button onClick={props.reset}>Toss Burger</button>
        </section>
    )
}

export default MyBurger