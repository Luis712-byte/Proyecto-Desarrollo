import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import { Container } from "react-bootstrap";
import { ClearCartIcon } from "./Icons.jsx";
import { CartContext } from "../context/cart.jsx";
import Swal from "sweetalert2";

function CartItem({ product, addToCart }) {
  const { removeFromCart, decreaseQuantity } = React.useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    Swal.fire({
      title: 'Producto eliminado',
      text: 'El producto fue eliminado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };
  const handledecreaseFromCart = () => {
    decreaseQuantity(product);
    window.location.reload();
  };
  console.log(CartItem);

  return (
    <div className="cart-products">
      <div className="cart-info">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3>{product.title}</h3>
        <p>Talla: {product.size}</p>
        <p>Precio: ${product.price}</p>
        <small>
          {" "}
          Cantidad:{" "}
          <button
            className="btn btn-primary"
            onClick={() => handledecreaseFromCart(product.id)}
          >
            -
          </button>
          {product.quantity}
        </small>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          +
        </button>
      </div>
      <button className="btn btn-primary" onClick={handleRemoveFromCart}>
        Eliminar Producto
      </button>
    </div>
  );
}

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  const handleConfirmCart = () => {
    if (cart.length > 0) {
      const isAuthenticated = !!localStorage.getItem("loggedInUserEmail");
      if (isAuthenticated) {
        navigate("/Pago");
        window.location.reload();
      } else {
        navigate("/Login");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay productos en el carrito de compra",
      });
    }
  };

  const handleClearCart = () => {
    if (cart.length > 0) {
      Swal.fire({
        title: "Se fue...",
        text: "¡Productos eliminados del carrito!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart();
          window.location.reload();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay productos en el carrito de compra",
      });
    }
  };

  return (
    <Container>
      <h1 className="text-center">PRODUCTOS DEL CARRITO</h1>
      <hr></hr>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-item mb-3" key={product.id}>
            <CartItem
              product={product}
              addToCart={() => addToCart(product)}
              removeFromCart={removeFromCart}
            />
          </div>
        ))}
      </div>

      <div className="container text-center">
        <div className="confirm-cart bg-dark text-white">
          <div className="total-items">
            Items: {totalItems}
            <div className="total">Total: ${total}</div>
          </div>
          <div className="buttom-confirm">
            <button className="btn btn-primary" onClick={handleConfirmCart}>
              Confirmar Compra
            </button>
          </div>
          <div className="buttom-clear">
            <button className="btn btn-danger" onClick={handleClearCart}>
              <ClearCartIcon />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
