import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-600 glass p-6 text-neutral-content">
      <div className="container pt-4">
        <div className="mb-4 flex justify-center">
          {/* Your social media icons */}
        </div>
      </div>

      <div className="w-full p-4 text-center">
        ©{currentYear} Copyright:
        <a href="https://tw-elements.com/">Ecom</a>
      </div>
    </footer>
  );
}
