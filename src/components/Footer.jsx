import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#2f2c44] text-white py-12 px-6 md:px-16">
      {/* Top Links and Social */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6 gap-4 md:gap-0">
        <nav className="flex gap-8 text-sm font-medium" aria-label="Footer navigation">
          <a href="#about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">About</a>
          <a href="#contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">Contact Us</a>
        </nav>
        <div className="flex gap-6 text-xl text-white">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-400 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 pt-10 text-sm">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-semibold text-lg mb-3">Oxiaura Plantation (Pvt) Ltd</h3>
          <p className="text-gray-300 leading-relaxed">
            Specializing in sustainable plantation management, eco-friendly products, and investment opportunities. Focused on innovation and growth to bring you the best.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-3 text-green-400">Products</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                Agarwood
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                Vanilla
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                Chilli
              </a>
            </li>
          </ul>
        </div>

        {/* Investments */}
        <div>
          <h4 className="font-semibold mb-3 text-green-400">Investments</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                Plantation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                Property
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-green-400">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="tel:+94382254330" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                +94 38 225 4330
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                Help Desk
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
                Why Oxiaura
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-gray-400 text-xs select-none">
        &copy; {new Date().getFullYear()} Oxiaura Plantation Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
