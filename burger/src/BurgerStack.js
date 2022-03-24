import { Component } from 'react';
import './App.css'
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

export default class BurgerStacker extends Component {
	render() {
		return (
			<div className='main-wrapper'>
				<h1>hello from burger stacker main</h1>
				<div>
					<IngredientList />
					<BurgerPane />
				</div>
			</div>
			)
	}
}

