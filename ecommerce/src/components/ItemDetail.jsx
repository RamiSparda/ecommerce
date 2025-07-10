import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  return (
    <div className="item-detail">
      <div className="item-detail__img-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="item-detail__img"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Imagen+No+Disponible';
          }}
        />
      </div>
      <div className="item-detail__info">
        <h2>{product.name}</h2>
        <p className="item-detail__desc">{product.description}</p>
        <p className="item-detail__price">
          Precio: ${product.price}
        </p>
        <p className={product.stock > 0 ? 'item-detail__stock--ok' : 'item-detail__stock--no'}>
          Stock: {product.stock}
        </p>
        {quantityAdded > 0 ? (
          <div className="item-detail__after-add">
            <p className="item-detail__added-msg">
              ✅ Agregaste {quantityAdded} unidades al carrito
            </p>
            <Link to="/cart">
              <button className="item-detail__btn item-detail__btn--cart">
                Ir al carrito
              </button>
            </Link>
            <Link to="/">
              <button className="item-detail__btn item-detail__btn--shop">
                Seguir comprando
              </button>
            </Link>
          </div>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;