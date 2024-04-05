import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    });
  }
  
  const decreaseQuantity = productId => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: productId
    });
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }
  

  return { state, addToCart, removeFromCart, decreaseQuantity, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      decreaseQuantity,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
