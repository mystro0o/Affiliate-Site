import React from "react";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Affiliate Hub</h1>
        <ul className="flex gap-6 text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#products" className="hover:text-blue-600">Products</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Find the Best Deals Online</h2>
        <p className="text-lg mb-6">Handpicked affiliate products to save you time & money.</p>
        <a href="#products" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200">
          Shop Now
        </a>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Featured Products</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img src="https://via.placeholder.com/300" alt="Product 1" className="rounded-lg mb-4" />
            <h4 className="text-lg font-semibold">Product 1</h4>
            <p className="text-gray-600 mb-2">$49.99</p>
            <a
              href="https://www.amazon.com/dp/B07GBZ4Q68?tag=your-affiliate-id"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-700"
              target="_blank" rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img src="https://via.placeholder.com/300" alt="Product 2" className="rounded-lg mb-4" />
            <h4 className="text-lg font-semibold">Product 2</h4>
            <p className="text-gray-600 mb-2">$79.99</p>
            <a
              href="https://www.amazon.com/dp/B09XX?tag=your-affiliate-id"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-700"
              target="_blank" rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img src="https://via.placeholder.com/300" alt="Product 3" className="rounded-lg mb-4" />
            <h4 className="text-lg font-semibold">Product 3</h4>
            <p className="text-gray-600 mb-2">$99.99</p>
            <a
              href="https://www.amazon.com/dp/B08YY?tag=your-affiliate-id"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-700"
              target="_blank" rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We research and recommend the best affiliate products across tech, lifestyle, and home categories.
          Our goal is to save you time and bring you only the most trusted items.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Affiliate Hub. All rights reserved.</p>
        <p className="mt-2">Follow us on 
          <a href="#" className="text-blue-400 hover:underline ml-2">Twitter</a> |
          <a href="#" className="text-blue-400 hover:underline ml-2">Instagram</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
