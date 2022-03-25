import './App.css';
import ingredientsArr from './Ingredients';
import DisplayIngredients from './DisplayIngredients';

function App() {
  return (
    <div className="App">
      <DisplayIngredients ingredients={ingredientsArr} />
    </div>
  );
}

export default App;
