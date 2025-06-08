import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width={200} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={(qty) => console.log(`Agregaste ${qty} unidades.`)} />
    </div>
  );
}

export default ItemDetail;