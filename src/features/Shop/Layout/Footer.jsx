import React from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ type }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
  >
    {type === "twitter" && (
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" />
    )}
    {type === "facebook" && (
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5a3.5 3.5 0 0 0-3.5 3.5V11h-2v3h2v7h3v-7h3v-3h-3V8.5a.5.5 0 0 1 .5-.5H18V5z" />
    )}
    {type === "instagram" && (
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    )}
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 py-10">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: support@meem.com</p>
          <p>Phone: +1 (234) 567-890</p>
          <p>123 Commerce St, Web City</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/info/about"
                className="hover:text-primary transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/info/contact"
                className="hover:text-primary transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/info/shipping"
                className="hover:text-primary transition-colors duration-200"
              >
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link
                to="/info/privacy"
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              <SocialIcon type="facebook" />
            </a>
            <a
              href="https://x.com"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              <SocialIcon type="twitter" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              <SocialIcon type="instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; 2025 meem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
