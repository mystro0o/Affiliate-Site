const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$49.99",
    img: "https://via.placeholder.com/300",
    link: "https://www.amazon.com/dp/YOUR-AFFILIATE-LINK",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$89.99",
    img: "https://via.placeholder.com/300",
    link: "https://www.amazon.com/dp/YOUR-AFFILIATE-LINK",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$29.99",
    img: "https://via.placeholder.com/300",
    link: "https://www.amazon.com/dp/YOUR-AFFILIATE-LINK",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              <img src={product.img} alt={product.name} className="w-full" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
