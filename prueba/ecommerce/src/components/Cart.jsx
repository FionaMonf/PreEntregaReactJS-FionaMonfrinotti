import { useContext } from "react";
import { CartContext } from "../components/context/CartContext"
import { Link } from "react-router-dom";
import { CartView } from "./CartView";

export const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <link to="/" className="Option">
          Productos
        </link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartView key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar Carrito
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
};


