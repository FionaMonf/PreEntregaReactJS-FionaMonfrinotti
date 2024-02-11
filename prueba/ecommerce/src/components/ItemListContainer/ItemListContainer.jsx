import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
// import { getProducts, getProductsByCategory } from "../asyncMock";
import { db } from "../../Services/Firebase/firebase.config";
import { getDocs, collection, query, where } from "firebase/firestore";




const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState (true)

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

const productsCollection = collection(db, "products");

  getDocs(productsCollection)
    .then((querySnapshot) => {
      const productsAdapted = querySnapshot.docs.map((doc) => {
        const fields = doc.data();
        return { id: doc.id, ...fields };
      });
      setProducts(productsAdapted);
    })

    .catch((error) => {
      showNotification("error", "Hubo un error");
    })

    .finally(() => {
      setLoading(false);
    });

  })
  

  // useEffect(() => {
  //   const asyncFunc = categoryId ? getProductsByCategory : getProducts;

  //   asyncFunc(categoryId)
  //     .then((response) => {
  //       setProducts(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [categoryId]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 100 }}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
