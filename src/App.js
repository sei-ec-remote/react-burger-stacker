import './App.css';
import ingredientArray from './IngredientList';
import IngredientContainer from './IngredientContainer';
import StackingArea from './StackingArea';

function App() {
  return (
    <div className="App">
      <IngredientContainer ingredients={ingredientArray}/>
      <StackingArea />

    </div>
  );
}

export default App;
