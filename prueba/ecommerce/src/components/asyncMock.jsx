const products = [
  {
    id: "Zapatilla1",
    nombre: "nike",
    price: 50000,
    category: "Zapatillas",
    img: "/src/imagenes/nike.jpg",
    stock: 30,
    description: "Nike Air Max rosas",
  },
  {
    id: "Zapatilla2",
    nombre: "Adidas forum",
    price: 90000,
    category: "Zapatillas",
    img: "/src/imagenes/adidas.avif",
    stock: 10,
    description: "Adidas forum azules",
  },

  {
    id: "Buzo1",
    nombre: "Buzo Nike",
    price: 20000,
    category: "Buzos",
    img: "/src/imagenes/buzoNike.jpg",
    stock: 10,
    description: "Buzo Nike gris",
  },

  {
    id: "Buzo2",
    nombre: "Buzo Adidas",
    price: 15000,
    category: "Buzos",
    img: "/src/imagenes/BuzoAdidas.jpg",
    stock: 50,
    description: "Buzo Adidas negro",
  }
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
