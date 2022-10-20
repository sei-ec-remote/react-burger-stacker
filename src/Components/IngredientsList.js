import React from "react"
import Ingredient from "./Ingredient"

class IngredientsList extends React.Component {

    state = {
        name: "",
        color: "#00ff00",
        textColor: "#000000",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    render () {
        const listItems = this.props.ingredients.map((item, index) => (
            <Ingredient key={index} name={item.name} color={item.color} textColor={item.textColor} clickItem={this.props.addToStack} />
        ))
                 

        return (
            <div className="Card">
                <div id="FullList">{listItems}</div>
                <label className="Form">Ingredient Name:</label>
                <input className="Form" type="text" name="name" placeholder="Ingredient Name" onChange={this.handleChange}/>
                <br></br>
                <label className="Form">Ingredient Color:</label>
                <input className="Form" type="color" name="color"  placeholder="#00ff00" onChange={this.handleChange}/>
                <br></br>
                <label className="Form">Text Color:</label>
                <input className="Form" type="color" name="textColor" placeholder="#000000" onChange={this.handleChange}/>
                <br></br>
                <button onClick={() => {this.props.newIngredient(this.state)}} >New Ingredient</button>
            </div>
        )
    }
}

export default IngredientsList