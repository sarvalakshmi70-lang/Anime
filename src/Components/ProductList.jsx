
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <h2>Our Anime Collection</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;

