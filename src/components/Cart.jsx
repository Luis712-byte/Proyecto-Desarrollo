import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import { Container } from "react-bootstrap";
import { ClearCartIcon } from "./Icons.jsx";

function CartItem({ product, addToCart, removeFromCart }) {
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="cart">
      <div className="cart-info">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Talla: {product.size}</p>
        <p>Precio: ${product.price}</p>
        <small>Cantidad: {product.quantity}</small>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
      <button onClick={handleRemoveFromCart}>Eliminar Producto</button>
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
      navigate("/Pago");
    } else {
      alert("No hay productos en el carrito de compra.");
    }
  };
  

  return (
    <Container>
      <h1 className="text-center">PRODUCTOS DEL CARRITO</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div class="container text-center">
        <div class="confirm-cart bg-dark text-white">
          <div class="total-items">
            Items: {totalItems}
            <div class="total">Total: ${total}</div>
          </div>
          <div className="buttom-confirm">
            <button class="btn btn-primary" onClick={handleConfirmCart}>
              Confirmar Compra
            </button>
          </div>
          <div className="buttom-clear">
            <button class="btn btn-danger" onClick={clearCart}>
              <ClearCartIcon />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
