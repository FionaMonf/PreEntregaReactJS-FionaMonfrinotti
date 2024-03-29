import { Link } from "react-router-dom" 

const Item = ({id, nombre, img, price, stock}) => {
    return (
        <article className="CardItem">
        <header className="Header">
        <h2 className="ItemHeader">
            {nombre}
        </h2>
        </header>
        <picture >
            <img src={img} alt={nombre} className="ItemImg" style={{ weight: 80, width: 80 }}/>
        </picture>
        <section>
            <p className="Info">
              Precio: ${price}
            </p>

            <p className="Info">
                Stock disponible: {stock}
            </p>
        </section>
        <footer className="ItemFooter">
            <Link to= {`/item/${id}`} className='Option'> Ver detalle </Link>
        </footer>
        </article>
    )
}

export default Item