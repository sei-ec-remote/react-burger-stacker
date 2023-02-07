import './App.css';
import BurgerStack from './components/BurgerPane/BurgerStack';
import Ingredients from './components/IngredientsList/Ingredients';
import ListIngredients from './components/IngredientsList/ListIngredients';
import React, {Component} from "react";

class App extends Component {
  // const [stack, setStack] = useState([])
  state = {
    Ingredients,
    stack: []
  }

  addStack = (e) => {
    e.preventDefault()
    const name = e.target.innerText
    const color = e.target.style.backgroundColor
    this.setState({
      stack: [{name: name, color: color}, ...this.state.stack]
    })
  }
  
  clearStack = () => {
    this.setState({
      stack: []
    })
  }

  render () {
    return (
      <>
        <h1 className='App'>Build-A-Burger</h1>
        <div className="ingredients-list">
          <ListIngredients ingredients={this.state.Ingredients} add={this.addStack} />
        
        </div>
        <div className="burger-stack">
          <BurgerStack stack={this.state.stack} clear={this.clearStack} />
        </div>
      </>
    )
  }
}

export default App;
