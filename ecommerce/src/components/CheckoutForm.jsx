import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { db } from '../services/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import './CheckoutForm.css';

function CheckoutForm() {
  const { cart, clear, getTotalPrice } = useCart();
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Crear objeto de orden
    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date())
    };

    try {
      // Guardar en Firebase
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clear(); // Vaciar carrito
    } catch (error) {
      console.error('Error al crear la orden:', error);
    } finally {
      setLoading(false);
    }
  };

  // Si ya se procesó la orden
  if (orderId) {
    return (
      <div className="checkout-form__success">
        <h2>¡Compra realizada con éxito! 🎉</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <p>Guardá este número para hacer seguimiento de tu compra.</p>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar Compra</h2>
      
      {/* Resumen del carrito */}
      <div className="checkout-form__summary">
        <h3>Resumen de tu compra</h3>
        {cart.map(item => (
          <div key={item.id} className="checkout-form__summary-row">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <hr />
        <div className="checkout-form__summary-total">
          <span>Total: </span>
          <span>${getTotalPrice()}</span>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="checkout-form__form">
        <div className="checkout-form__field">
          <label>Nombre completo:</label>
          <input
            type="text"
            value={buyer.name}
            onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
            required
            className="checkout-form__input"
          />
        </div>
        
        <div className="checkout-form__field">
          <label>Teléfono:</label>
          <input
            type="tel"
            value={buyer.phone}
            onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
            required
            className="checkout-form__input"
          />
        </div>
        
        <div className="checkout-form__field">
          <label>Email:</label>
          <input
            type="email"
            value={buyer.email}
            onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            required
            className="checkout-form__input"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className={`checkout-form__btn${loading ? ' checkout-form__btn--loading' : ''}`}
        >
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;