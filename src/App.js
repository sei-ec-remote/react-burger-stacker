import logo from './logo.svg';
import './App.css';
import BurgerStacker from './BurgerStacker';

const IngredientList = [
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



const burgStack = []

const addIng = () => {
  this.setState((state, prop) => {
    return {
      
    }
  })
}

function App() {
  return (
    <div className="App">
      <BurgerStacker />
    </div>
  );
}

export default App;
