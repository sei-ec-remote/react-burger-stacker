import './App.css';
import IngredientsList from './IngredientsList';
import BurgerPane from './BurgerPane';

function App() {
  const foodItems = [
    
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    
  ]
  return (
    <div className="App">
      <h1>Burger Stacker</h1>
      <div className="Ingredient-List">
        <h1>
        <IngredientsList foodItems={foodItems}/>
        </h1>
      </div>
      <div className="Burger-Pane">
        <BurgerPane foodItems={foodItems}/>
      </div>
    </div>
  );
}

export default App;
