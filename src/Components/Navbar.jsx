
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">ANIME SHOP</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </div>

      <div className="cart-count">
        🛒 {cartCount}
      </div>
    </nav>
  );
}

export default Navbar;
