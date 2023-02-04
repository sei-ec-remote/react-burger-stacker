import './App.css';
import BurgerStack from './components/BurgerPane/BurgerStack';
import Ingredients from './components/IngredientsList/Ingredients';
import ListIngredients from './components/IngredientsList/ListIngredients';

function App() {
  function handleClick (e){
    console.log(e.target.value)
  }

  return (
    <>
      <h1>Build-A-Burger</h1>
      <div>
        <ListIngredients ingredients={Ingredients} click={handleClick} />
      
      </div>
      <div>
        <BurgerStack />
      </div>
    </>
  )
}

export default App;
