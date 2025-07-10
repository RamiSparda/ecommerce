import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // ← NUEVO IMPORT
import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Cart from './components/Cart'; // ← NUEVO IMPORT
import CheckoutForm from './components/CheckoutForm'; // ← NUEVO IMPORT

function App() {
  return (
    <CartProvider> {/* ← NUEVO: Envolver toda la app */}
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría..." />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {/* ← NUEVA RUTA */}
        <Route path="/checkout" element={<CheckoutForm />} /> {/* ← NUEVA RUTA */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </CartProvider>
  );
}

export default App;