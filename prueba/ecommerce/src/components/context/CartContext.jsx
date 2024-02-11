import { useState, createContext, useContext } from "react";

// export const CartContext = createContext({
//     cart: [],
//     addItem: () => {},
//     removeItem: () => {},
//     totalQuantity: 0,
//     total: 0,
//     clearCart: () => {}
// })

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([])
//     console.log(cart)

//     const addItem = (productToAdd) => {
//       if(!isInCart(productToAdd.id)) {
//         setCart(prev => [...prev, productToAdd])
//       } else {
//         const cartUpdated = cart.map(prod => {
//           if(prod.id === productToAdd.id) {
//             return {
//               ...prod,
//               quantity: productToAdd.quantity
//             }
//           } else {
//             return prod
//           }
//         })

//         setCart(cartUpdated)
//       }
//     }

//     const isInCart = (id) => {
//       return cart.some(prod => prod.id === id)
//     }

//     const removeItem = (id) => {
//       const cartUpdated = cart.filter(prod => prod.id !== id)
//       setCart(cartUpdated)
//     }

//     const getTotalQuantity = () => {
//         let accu = 0

//         cart.forEach(prod => {
//             accu += prod.quantity
//         })

//         return accu
//     }

//     const totalQuantity = getTotalQuantity()

//     const getTotal = () => {
//       let accu = 0

//       cart.forEach(prod => {
//           accu += prod.quantity * prod.price
//       })

//       return accu
//     }

//     const total = getTotal()

//     const clearCart = () => {
//         setCart([])
//     }

//     const getProductQuantity = (productId) => {
//       const product = cart.find(prod => prod.id === productId)
//       return product?.quantity
//     }

//     return (
//         <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart, getProductQuantity }}>
//             { children }
//         </CartContext.Provider>
//     )
// }

// export const useCart = () => {
//     return useContext(CartContext)
// }

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotalQuantity = () => {
    let accu = 0;

    cart.forEach((prod) => {
      accu += prod.quantity;
    });

    return accu;
  };

  const totalQuantity = getTotalQuantity();

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
