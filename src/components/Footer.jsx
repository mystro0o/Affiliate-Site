export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <p>© {new Date().getFullYear()} AffiliateSite. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
