import './App.css';
import IngredientList from './components/IngredientList';
// import Ingredients from './components/Ingredients';
// import BurgerPane from './components/BurgerPane';

const indgredients = [
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
    <>
      <div id="boxOne">
        <IngredientList ingredients={indgredients}/>
      </div>
      <div id="boxTwo">
        PUT THE BURGER HERE???{/* <IngredientsList ingredients={burgerArray}/> */}
      </div>
    </>
  );
}

export default App;
