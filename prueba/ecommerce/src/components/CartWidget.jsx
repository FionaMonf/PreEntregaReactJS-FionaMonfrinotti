import { useContext } from "react"
import Cart from "../imagenes/carrito.png"
import {CartContext} from '../components/context/CartContext'
import {Link} from 'react-router-dom'


const CartWidget = () => {
 const { totalQuantity } = useContext(CartContext)

return (
<Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
<img className="carrito" src= {Cart} alt="cart-widget" style={{weight:30, width:30 }}/>
{totalQuantity}
</Link>
)

}

export default CartWidget