import React from "react";

// Example products with Amazon affiliate links
const products = [
  {
    id: 1,
    name: "Logitech G502 HERO Gaming Mouse",
    price: "$39.99",
    link: "https://www.amazon.com/dp/B07GBZ4Q68?tag=your-affiliate-id", // 👈 replace with your Amazon ID
    img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Redragon K552 Mechanical Keyboard",
    price: "$34.99",
    link: "https://www.amazon.com/dp/B016MAK38U?tag=your-affiliate-id", // 👈 replace
    img: "https://m.media-amazon.com/images/I/71cngLX2xuL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "HyperX Cloud II Gaming Headset",
    price: "$99.99",
    link: "https://www.amazon.com/dp/B00SAYCXWG?tag=your-affiliate-id", // 👈 replace
    img: "https://m.media-amazon.com/images/I/71Z49Jk-nsL._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "ASUS TUF Gaming Monitor 27”",
    price: "$189.99",
    link: "https://www.amazon.com/dp/B0876M62V8?tag=your-affiliate-id", // 👈 replace
    img: "https://m.media-amazon.com/images/I/81r1JcLm97L._AC_SL1500_.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-10 px-6">
      <h3 className="text-3xl font-bold text-center mb-8">Top Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-xl transition p-4 text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="mx-auto mb-4 h-40 object-contain"
            />
            <h4 className="font-semibold">{product.name}</h4>
            <p className="text-gray-600">{product.price}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-500"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
