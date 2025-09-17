import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} Affiliate Store. All Rights Reserved.</p>
    </footer>
  );
}
