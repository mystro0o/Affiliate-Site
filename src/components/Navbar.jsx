import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Affiliate Store</h1>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-yellow-400">Home</a></li>
        <li><a href="/products" className="hover:text-yellow-400">Products</a></li>
        <li><a href="/about" className="hover:text-yellow-400">About</a></li>
        <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
}
