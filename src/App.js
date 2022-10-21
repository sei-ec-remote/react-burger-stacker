import logo from './logo.svg';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import ClearBurger from './components/ClearBurger';

function App() {
  return (
    <div className='container'>
    <div className='firstDiv'>
      <IngredientList/>
    </div>

    <div className='secondDiv'>
      <BurgerStack/>
      <ClearBurger/>
    </div>
    </div>
  );
}

export default App;
