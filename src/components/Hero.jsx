import React from "react";

export default function Hero() {
  return (
    <section className="bg-yellow-400 text-gray-900 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Affiliate Store</h2>
      <p className="text-lg mb-6">Find the best deals on products you love, with our trusted partners.</p>
      <a href="/products" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700">
        Shop Now
      </a>
    </section>
  );
}
