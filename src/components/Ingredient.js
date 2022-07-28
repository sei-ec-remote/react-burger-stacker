const Ingredient = (props) => {
     return (
          <div style={{
               backgroundColor: props.ingredient.color,
               color: 'blue'
               }}
               onClick={props.func}
          >
               {props.ingredient.name}
          </div>
     )
}

export default Ingredient