import  './ListIngredients.css'
function ListIngredients ({ingredients, click}) {
        return (
            <>
            <ul>
            {ingredients.map((item, idx) =>  
                <>
                <li onClick={click} style={{backgroundColor: `${item.color}`}} >{item.name}</li>
                </>
                )}
            </ul>
            </>
           )
}
export default ListIngredients