import {
  Navbar,
  Banner,
  Featured,
  Footer,
  Hero,
  Products,
  Story,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Featured />
      <Products />
    </div>
  );
}

export default App;
