import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import Item from '../Item';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
      }, 1000);
    });
    getData.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <div>{items.map(product => <Item key={product.id} product={product} />)}</div>
    </div>
  );
}

export default ItemListContainer;