import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
