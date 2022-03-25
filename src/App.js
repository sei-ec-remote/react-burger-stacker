import './App.css';
import Burger from './Burger';
import IngredientList from './IngredientList';


const ingredientList = [
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

const burger = []

function App() {
  return (
    <div className="App">
      <h1> BURGER STACKER! </h1>
      <div id="master-container">
        <IngredientList ingredientList={ingredientList}/>
      <div id="container">
          <Burger burger={burger}/>
      </div>
      </div>
    </div>
  );
}

export default App;
