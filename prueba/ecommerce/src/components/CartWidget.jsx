import Cart from "../imagenes/carrito.png"

const CartWidget = () => {
return (
    <div> 
        <img className="carrito" src= {Cart} alt="" style={{weight:30, width:30}}/>
        <span>
            0
        </span>
    </div>
)
}

export default CartWidget