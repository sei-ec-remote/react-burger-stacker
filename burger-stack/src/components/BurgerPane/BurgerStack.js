function BurgerStack ({value, click}) {
    console.log(value)
    const burgerStack = value.map(item => {
        return (
            <li style={{backgroundColor:`${item.color}`}}>
                {item.name}
            </li>
        )
    })
    return (
        <>
            <ul>
                {burgerStack}
            </ul>
            <button onClick={click} >Clear</button>
        </>
      
    )
}
export default BurgerStack