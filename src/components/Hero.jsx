export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Best Affiliate Products
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Hand-picked deals and offers just for you.
        </p>
        <a
          href="#products"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
