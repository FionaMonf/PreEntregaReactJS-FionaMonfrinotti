const products = [
  {
    id: "Buzo",
    nombre: "nike",
    price: 3000,
    category: "Buzos",
    img: "/src/imagenes/nike.jpg",
    stock: 30,
    description: "Descripcion Nike Air Max",
  },
  {
    id: "Zapatilla",
    nombre: "Adidas forum",
    price: 9000,
    category: "Zapatillas",
    img: "/src/imagenes/adidas.avif",
    stock: 10,
    description: "Descripcion adidas forum",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
