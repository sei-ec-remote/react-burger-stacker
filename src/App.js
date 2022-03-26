import './App.css';
import BurgerStacker from './BurgerStacker';

function App() {

    return (
    <div className="App">
    <h1>MAKE A BURGER</h1>
        < BurgerStacker />
    </div>
    )
}

export default App;

/////////////
// TO-DO
/////////////
// ✓ 1. Make a list of all the possible ingredients
// ✓ 2. Create column for ingredients and column for burger
// ✓ 3. Pass ingredients down to IngredientList for parsing
// ✓ 4. Display ingredient list
// 5. Click on ingredient and receive response
// 6. Turn click response into action (put ingredient in burger column)
// 7. Ensure clicked ingredients are stacking correctly
// 8. Button to clear burger ingredients
// ✓ 9. BONUS 1: Give ingredients listed background colour
// 10. BONUS 2: Form to ingredients side so user can add items
// 11. BONUS 3: Undo last add by clicking button to remove. Button moves down stack (render to top ingredient)