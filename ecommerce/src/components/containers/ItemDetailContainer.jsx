import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import ItemDetail from '../ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === itemId));
      }, 1000);
    });
    getProduct.then(res => setProduct(res));
  }, [itemId]);

  return (
    <div>{product ? <ItemDetail product={product} /> : <p>Cargando...</p>}</div>
  );
}

export default ItemDetailContainer;