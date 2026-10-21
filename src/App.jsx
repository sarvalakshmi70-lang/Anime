
<<<<<<< HEAD
import "./App.css";
import Counter from "./Components/Counter";
import Student from "./Components/Student";
import LiveSearch from "./Components/LiveSearch";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Practice</h1>
        <p>Learn React Hooks and Components</p>
      </header>

      <main className="components-container">
        <section className="component-card">
          <Counter />
        </section>

        <section className="component-card">
          <Student
            name="Sarvalakshmi"
            department="CSE"
          />
        </section>

        <section className="component-card">
          <LiveSearch />
        </section>
      </main>

      <footer className="app-footer">
        Built with React
      </footer>
    </div>
=======
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
>>>>>>> 1c8ebacf8fb241b7e4d25f95383440e05c7e436f
  );
}

export default App;
