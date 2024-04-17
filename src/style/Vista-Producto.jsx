import React from "react";
import { useFilters } from "../hooks/useFilters.js";
import { Products } from "../components/Productos.jsx";
import products from "../mocks/products.json";
import { CartProvider } from "../context/cart.jsx";
import NavBar from "../components/Header.jsx";
import View from "./Vista-filter.jsx";

const Producto = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div className="Home">
      <NavBar />
      <div className="container-fluid">
        <h1 className="text-center">LISTADO DE PRODUCTOS</h1>
        <hr></hr>
        <div className="row">
          <div className="col-lg-3">
            <View />
          </div>
          <div className="col-lg-9">
            <CartProvider>
              <Products products={filteredProducts} />
            </CartProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Producto;
