
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import products from "./Data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Hero />
      <ProductList
        products={products}
        onAddToCart={addToCart}
      />
      <Cart cart={cart} onRemove={removeFromCart} />
      <Footer />
    </>
  );
}

export default App;
