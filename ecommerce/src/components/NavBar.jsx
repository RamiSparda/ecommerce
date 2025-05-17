import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd'
    }}>
      {/* Izquierda: Logo */}
      <div style={{ flex: 1 }}>
        <h1 style={{ margin: 0 }}>MiTienda</h1>
      </div>

      {/* Centro: Enlaces */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Inicio</a>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Productos</a>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contacto</a>
      </div>

      {/* Derecha: Carrito */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
