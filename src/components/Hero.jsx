{/* Hero Section */}
<section
  className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1350&q=80')"
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-2xl">
    <h1 className="text-5xl font-extrabold mb-4">Shop Smarter with Us</h1>
    <p className="text-lg mb-6">
      Discover exclusive deals on top products, carefully curated for you.
    </p>
    <a
      href="#products"
      className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
    >
      Shop Now
    </a>
  </div>
</section>
