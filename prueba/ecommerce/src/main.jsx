import React, { cloneElement } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./imagenes/logo.png";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCountt/ItemCount";
import Nike from "./imagenes/nike.jpg";
import Adidas from "./imagenes/adidas.avif";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import BuzoNike from "./imagenes/buzoNike.jpg";
import BuzoAdidas from "./imagenes/BuzoAdidas.jpg";
import { CartProvider } from "./components/context/CartContext";
import { CartView } from "./components/CartView";
import { Checkout } from "./components/Checkout/Checkout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <img src={Logo} alt="" style={{ weight: 50, width: 50 }} />
      <h1 style={{ color: "red", textAlign: "center" }}>Monfri's E-Commerce</h1>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
