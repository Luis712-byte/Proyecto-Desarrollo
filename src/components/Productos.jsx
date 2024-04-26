import React from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { useNavigate, Link } from "react-router-dom";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const navigate = useNavigate();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    window.location.reload();
  };
  const handleremove = (product) => {
    removeFromCart(product);
    window.location.reload();
  };

  return (
    <main className="products">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.slice(0, 14).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id} className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto"
              />
              <div className="mt-2">
                <strong className="text-xl">{product.title}</strong>
                <br></br>Precio: ${product.price}
                <br></br>
              </div>
              <div className="mt-2">
                <div className="button-container">
                  <Link
                    to={`/detail/${product.id}`}
                    className="btn btn-primary py-2 px-4"
                  >
                    Información
                  </Link>

                  <button
                    className={`${
                      isProductInCart ? "bg-danger" : "bg-primary"
                    } text-white py-2 px-4 rounded`}
                    onClick={() => {
                      isProductInCart
                        ? handleremove(product)
                        : handleAddToCart(product);
                    }}
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
