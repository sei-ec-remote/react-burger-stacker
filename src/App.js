import logo from './logo.svg';
import './App.css';
import BurgerPane from './components/BurgerPane';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';
import Ingredients from './components/Ingredients';

function App() {
  return (
    <div className="assembled">
      <BurgerPane />
      <BurgerStack />
      <IngredientList />
      <Ingredients />
    </div>
  );
}

export default App;
