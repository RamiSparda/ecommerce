import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver más</Link>
    </div>
  );
}

export default Item;