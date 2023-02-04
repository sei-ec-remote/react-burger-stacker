import AddStack from "../BurgerPane/AddStack"


function ListIngredients ({ingredients, click}) {
        return (
            <>
            {ingredients.map((item, idx) =>  
                <>
                <p>{item.name}</p>
                <button value={item.name} onClick={click}>Add</button>
                {console.log(idx)}
                </>
                )}
            </>
           )
}
export default ListIngredients