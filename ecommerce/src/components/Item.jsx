import { Link } from 'react-router-dom';
import './Item.css';

function Item({ product }) {
  return (
    <div className="item">
      <img 
        src={product.image} 
        alt={product.name}
        className="item__img"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+No+Disponible';
        }}
      />
      <h3 className="item__name">{product.name}</h3>
      <p className="item__desc">
        {product.description}
      </p>
      <p className="item__price">
        ${product.price}
      </p>
      <p className={product.stock > 0 ? 'item__stock--ok' : 'item__stock--no'}>
        {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
      </p>
      <Link to={`/item/${product.id}`}>
        <button className="item__btn">
          Ver detalle
        </button>
      </Link>
    </div>
  );
}

export default Item;