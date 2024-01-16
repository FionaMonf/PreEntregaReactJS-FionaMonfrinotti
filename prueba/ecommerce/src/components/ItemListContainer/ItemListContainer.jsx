import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../asyncMock";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 100 }}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
