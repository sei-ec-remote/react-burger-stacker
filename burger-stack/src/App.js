import './App.css';
import {useState} from 'react'
import BurgerStack from './components/BurgerPane/BurgerStack';
import Ingredients from './components/IngredientsList/Ingredients';
import ListIngredients from './components/IngredientsList/ListIngredients';


function App() {
  const [stack, setStack] = useState([])
  // const [color, setColor] = useState()

  function handleClick (e) {
    e.preventDefault()
    const value = e.target.innerText
    // setColor(e.target.style.backgroundColor)
    console.log(e.target.style.backgroundColor)
    setStack([{name: value, color: e.target.style.backgroundColor}, ...stack])
  }
  
  function clearStack (e) {
    setStack([])
  }

  return (
    <>
      <h1>Build-A-Burger</h1>
      <div class="ingredients-list">
        <ListIngredients ingredients={Ingredients} click={handleClick} />
      
      </div>
      <div class="burger-stack">
        <BurgerStack value={stack} click={clearStack} />
      </div>
    </>
  )
}

export default App;
