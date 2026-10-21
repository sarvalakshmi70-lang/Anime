
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
  );
}

export default App;
