import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemList from '../ItemList';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, 'products');
        const q = categoryId 
          ? query(productsRef, where('category', '==', categoryId))
          : productsRef;
        
        const snapshot = await getDocs(q);
        const productsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setItems(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
}

export default ItemListContainer;