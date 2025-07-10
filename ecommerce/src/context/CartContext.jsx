/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar item al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      // Si ya está, actualizar cantidad
      setCart(cart.map(prod => 
        prod.id === item.id 
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      // Si no está, agregarlo
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar item del carrito
  const removeItem = (itemId) => {
    setCart(cart.filter(prod => prod.id !== itemId));
  };

  // Vaciar carrito
  const clear = () => {
    setCart([]);
  };

  // Verificar si un item está en el carrito
  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  // Calcular precio total
  const getTotalPrice = () => {
    return cart.reduce((total, prod) => total + prod.price * prod.quantity, 0);
  };

  // Calcular cantidad total de items
  const getTotalQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clear,
      isInCart,
      getTotalPrice,
      getTotalQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};