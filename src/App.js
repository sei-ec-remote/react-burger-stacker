import ingredients from './Ingredients'
import './App.css';
import IngredientCont from './IngredientCont'
import BurgerPane from './BurgerPane';

function App() {
  const choices = ingredients
  return (
    <div className="App">
      <div className='left-container'>
        <h2>Ingredients</h2>
        <div className='left-child'>
          <IngredientCont choices={choices}/>
        </div>
      </div>
      <div className='right-container'>
        <h2>BurgerStack</h2>
        <div className='right-child'>
          <BurgerPane/>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
