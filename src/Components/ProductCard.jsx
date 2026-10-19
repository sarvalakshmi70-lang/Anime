
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <h4>₹{product.price}</h4>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
