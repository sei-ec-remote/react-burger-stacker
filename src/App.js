import './App.css';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';
function App() {
  const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'}, 
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'},
    {name: 'Cheese', color: 'goldenrod'}
  ]
  return (
    <div  className="App">
      <h1>Burger Stacker</h1>
      <div className="flexContainer">
        <IngredientList ingredients={ingredients}/>
        <BurgerPane />
      </div>
      
    </div>
  );
}

export default App;