// import { useState } from 'react';

import './App.css';
// import BurgerPane from './BurgerPane'
// import IngredientList from './IngredientList'
import BurgerStacker from './BurgerStacker';




function App() {
// const [clickedIngredients, setClickedIngredients] = useState([])
// const clickIngredient = (e) => {
//   console.log(e.target.innerText)
//   setClickedIngredients( [
//     ...clickedIngredients, {name: e.target.innerText}
//   ])
// }
// ... comes from javascript - spread elements or rest properties

  return (
      <div className="App">
        <div className="display">
          <BurgerStacker />
          {/* <IngredientList click ={clickIngredient}/>
          <BurgerPane clicked = {clickedIngredients}/> */}
        </div>
      </div>
  )
}

export default App;
