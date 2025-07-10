import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, clear, getTotalPrice } = useCart();

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="cart__empty">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agregá productos para comenzar a comprar!</p>
        <Link to="/" className="cart__empty-btn">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      
      {/* Mostrar cada item del carrito */}
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      
      {/* Total y acciones */}
      <div className="cart__total">
        <h3>Total: ${getTotalPrice()}</h3>
        <button 
          onClick={clear} 
          className="cart__btn cart__btn--clear"
        >
          Vaciar carrito
        </button>
        <Link to="/checkout">
          <button className="cart__btn cart__btn--checkout">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;