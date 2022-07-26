// App.js
import './App.css';
import { useState } from 'react'

function App() {

  const [stack, setStack] = useState([])

  const starterData = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]

  return (
    <div className="App">
      <h1>Burger Stacker Deliverable</h1>
      <div className="panes">
        <div>
          <h2>Ingredients List</h2>
          {
            starterData.map((item, index) => {
              return <p style={{
                backgroundColor: item.color}}
                onClick={() => {
                  setStack([item, ...stack])
                }
                }>{item.name}</p>
            })
          }
        </div>
        <div>
          <h2>Stacked Burger</h2>
          {
            stack.map((item) => {
              console.log(item)
              return (
                <p style={{ backgroundColor: item.color }} >{item.name}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;