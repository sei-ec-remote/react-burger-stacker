import './App.css';
import BurgerContainer from './BurgerContainer';

// As a user, I want to see all available burger ingredients listed on the left side.
// I want the ability to add any ingredient onto the burger stack using a button.
// I want to see each ingredient I select added to the top of the burger stack on the right side.
// I want the ability to clear the burger stack so I can start again.
// I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)

const filteredIngredientList = [];

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

function App() {
  return (
    <div>
      <BurgerContainer 
        ingredients={ingredients}
        filteredIngredientList={filteredIngredientList} 
      />      
    </div>
  );
}

export default App;
