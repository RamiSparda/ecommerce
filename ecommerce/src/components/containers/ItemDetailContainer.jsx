import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemDetail from '../ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productDoc = doc(db, 'products', itemId);
        const productSnap = await getDoc(productDoc);
        
        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [itemId]);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>;
  }

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <div>Producto no encontrado</div>}
    </div>
  );
}

export default ItemDetailContainer;