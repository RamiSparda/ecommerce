import { useCart } from '../context/CartContext';
import './CartItem.css';

function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <h4>{item.name}</h4>
        <p>Precio unitario: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p><strong>Subtotal: ${item.price * item.quantity}</strong></p>
      </div>
      <button 
        onClick={() => removeItem(item.id)}
        className="cart-item__btn"
      >
        🗑️ Eliminar
      </button>
    </div>
  );
}

export default CartItem;