import React, {useState} from "react"
import Ingredient from "./Ingredient"

const IngredientsList = (props) => {

    const [ingredient, setIngredient] = useState({name: "", color: "#00ff00", textColor: "#000000" })

    const handleChange = (e) => {
        setIngredient(prev => {
            const updatedValue = {[e.target.name]: e.target.value}
            return { ...prev,
            ...updatedValue }
        })
    }    

    
    const listItems = props.ingredients.map((item, index) => (
        <Ingredient key={index} name={item.name} color={item.color} textColor={item.textColor} clickItem={props.addToStack} />
    ))
                

    return (
        <div className="Card">
            <div id="FullList">{listItems}</div>
            <label className="Form">Ingredient Name:</label>
            <input className="Form" type="text" name="name" placeholder="Ingredient Name" onChange={handleChange}/>
            <br></br>
            <label className="Form">Ingredient Color:</label>
            <input className="Form" type="color" name="color"  value={ingredient.color} onChange={handleChange}/>
            <br></br>
            <label className="Form">Text Color:</label>
            <input className="Form" type="color" name="textColor" value={ingredient.textColor} onChange={handleChange}/>
            <br></br>
            <button onClick={() => {props.newIngredient(ingredient)}} >New Ingredient</button>
        </div>
    )
}

export default IngredientsList