import './App.css';
import IngredientsBubble from "./components/IngredientsBubble.js";
import BurgerBubble from "./components/BurgerBubble.js";

import ingredients from "./data/ingredientList.js";

function App() {
  return (
    <div className="App">
      <div className="bubble">
        <IngredientsBubble
          ingredients={ingredients}
        />
      </div>

      <div className="bubble">
        <BurgerBubble
        
        />
      </div>
    </div>
  );
}

export default App;
