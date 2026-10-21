
function Cart({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <section className="cart-section" id="cart">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <div className="cart-item" key={`${product.id}-${index}`}>
            <span>{product.name} - ₹{product.price}</span>
            <button onClick={() => onRemove(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </section>
  );
}

export default Cart;
