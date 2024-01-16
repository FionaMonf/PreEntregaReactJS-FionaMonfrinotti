import ItemCount from "./ItemCountt/ItemCount";

const ItemDetail = ({
  id,
  nombre,
  img,
  category,
  description,
  price,
  stock,
}) => {
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
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("cantidad agregada")}
        ></ItemCount>
      </footer>
    </article>
  );
};

export default ItemDetail;
