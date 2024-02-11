import { useContext } from "react";
import { useState } from "react";
import ItemCount from "./ItemCountt/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";

const ItemDetail = ({ id, nombre, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            nombre,
            price,
        };

        addItem(item, quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">categoria: {category}</p>
                <p className="Info">Descripcion: {description}</p>
                <p className="Info">Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="Option">
                        Terminar compra
                    </Link>
                ) : (
                    <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;

