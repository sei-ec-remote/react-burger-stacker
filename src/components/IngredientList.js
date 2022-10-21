import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import '../index.css'


const food = [
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

class IngredientList extends Component {
    render() {
        return (
            <>
                <div className='ingredients'>
                    <>{food}</>
                </div>
            </>
        )
    }
}

export default IngredientList