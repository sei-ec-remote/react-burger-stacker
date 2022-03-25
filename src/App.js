import './App.css';
import Burger from './Burger';
import IngredientList from './IngredientList';

function App() {
  return (
    <div className="App">
      <h1> BURGER STACKER! </h1>
      <div id="master-container">
      <div id="container">
          <Burger/>
        </div>
        <div id="container">
          <IngredientList/>
        </div>
      </div>
    </div>
  );
}

export default App;
