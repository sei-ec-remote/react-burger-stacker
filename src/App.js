import './App.css';
import BurgerStacker from './BurgerStacker';

// As a user, I want to see all available burger ingredients listed on the left side.
// I want the ability to add any ingredient onto the burger stack using a button.
// I want to see each ingredient I select added to the top of the burger stack on the right side.
// I want the ability to clear the burger stack so I can start again.
// I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)

function App() {
	return (
		<div>
		<BurgerStacker 
		/>      
		</div>
	);
}

export default App;
