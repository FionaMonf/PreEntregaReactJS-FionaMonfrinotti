import { useContext } from "react";
import Carrito from "../imagenes/carrito.png";
import { CartContext } from "../components/context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  //  style={{ display: totalQuantity > 0 ? 'block' : 'none'}}
  return (
    <Link to="/cart" className="CartWidget">
      <img
        className="carrito"
        src={Carrito}
        alt="cart-widget"
        style={{ weight: 30, width: 30 }}
      />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
