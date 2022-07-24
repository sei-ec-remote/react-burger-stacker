import './App.css';
import BurgerPane from './BurgerPane'
import BurgerStack from './BurgerStack'
import Ingredient from './Ingredient'
import IngredientList from './IngredientList'
import ClearBurger from './ClearBurger'

function App() {
  const ingredients = [
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
  let burgIng = []
  return (
    <main>
      <h1>Stack them burgs</h1>
    <div className="App">
    <IngredientList
    ingredients={ingredients}
    />
    <BurgerStack />
    </div>
    </main>
  );
}

export default App;
