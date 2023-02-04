import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Ingrediants</h2>
        <ul>
          <li><span className="ingrediantName">Item Name</span><div className="button">Add</div></li>
        </ul>
      </div>
      <div className="container">
        <h2>Burger Stack</h2>
        <div className="burgerStackArea">
          <div className="burgerIngrediant">
              <p>Ingrediant Name</p>
          </div>
        </div>
        <div className="button clear">Clear Stack</div>
      </div>
    </div>
  );
}

export default App;
