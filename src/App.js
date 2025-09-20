import React from "react";
import products from "./products.json";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Affinity Market</h1>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#products" className="hover:text-indigo-600">Products</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </nav>
{/* Hero Section */}
<section
  className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
  style={{
    backgroundImage: "url('https://t3.ftcdn.net/jpg/09/47/24/02/360_F_947240266_vILwmKGTvRMeF5qUI3JdmafagYMSBj69.jpg')"
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-2xl">
    <h1 className="text-5xl font-extrabold mb-4">Shop Smarter with Us</h1>
    <p className="text-lg mb-6">Discover exclusive deals on top products, carefully curated for you.</p>
    <a
      href="#products"
      className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
    >
      Shop Now
    </a>
  </div>
</section>



      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          We bring you the best affiliate products at unbeatable prices.
          Our mission is to help you discover high-quality deals without wasting time searching.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700">Got questions? Reach us at:</p>
        <p className="text-indigo-600 font-semibold mt-2">support@affiliate-store.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} My Affiliate Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
