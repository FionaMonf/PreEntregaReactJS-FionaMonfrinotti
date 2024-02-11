import { useEffect, useState } from "react";
// import { getProductById } from "./asyncMock";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../Services/Firebase/firebase.config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState (true)

  const { itemId } = useParams();

useEffect(() => {
setLoading(true)

const docRef = doc(db, 'products', itemId)

getDoc(docRef)
.then(response => {
  const data= response.data()
  const productsAdapted = { id: response.id, ...data  }
  setProduct(productsAdapted)
})
.catch(error => {
  console.log(error)
})
.finally(() => {
  setLoading(false)
})
}, [itemId])

  // useEffect(() => {
  //   getProductById(itemId)
  //     .then((response) => {
  //       setProduct(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
