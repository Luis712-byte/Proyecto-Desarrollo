import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../mocks/products.json";
import { NavBar } from "./Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../hooks/useCart.js";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import Swal from "sweetalert2";

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));
  const { addToCart, removeFromCart, cart } = useCart();

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.popularity; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return stars;
  };

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      title: "Producto Agregado",
      text: "El producto fue agregado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  const handleremove = (product) => {
    removeFromCart(product);
    Swal.fire({
      title: "Producto eliminado",
      text: "El producto fue eliminado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  const isProductInCart = checkProductInCart(product);

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        {product ? (
          <div className="card border-0 shadow">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={product.image}
                  className="productdetail-image "
                  alt={product.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="card-text">{product.description}</p>
                  <p className="m-0">Price: ${product.price}</p>
                  <p className="m-0">Size: {product.size}</p>
                  <p className="m-0">Category: {product.category}</p>
                  <div className="popularity">
                    <span>
                      {renderStars()} {product.popularity}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="button-container">
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
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            <h2 className="text-center">Product Not Found</h2>
            <p className="text-center">The requested product does not exist.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
