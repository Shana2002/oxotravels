import React from 'react'
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2f2c44] text-white py-12 px-6 md:px-16">
      {/* Top links */}
      <div className="flex justify-between items-center border-b border-gray-600 pb-6">
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact us</a>
        </div>
        <FaTwitter className="text-white text-xl cursor-pointer" />
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-10 text-sm">
        {/* Column 1: Company Info */}
        <div className="col-span-2">
          <h3 className="font-semibold mb-2">Oxiaura Plantation (pvt) Ltd</h3>
          <p className="text-gray-300">
            Oxiaura Plantation Pvt. Ltd. specializes in sustainable plantation management, eco-friendly products, and investment opportunities, focusing on innovation and growth.
          </p>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="text-gray-300 space-y-1">
            <li><a href="#" className="hover:underline">Agarwood</a></li>
            <li><a href="#" className="hover:underline">Vanilla</a></li>
            <li><a href="#" className="hover:underline">Chilli</a></li>
          </ul>
        </div>

        {/* Column 3: Investments */}
        <div>
          <h4 className="font-semibold mb-2">Investments</h4>
          <ul className="text-gray-300 space-y-1">
            <li><a href="#" className="hover:underline">Plantation</a></li>
            <li><a href="#" className="hover:underline">Property</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-gray-300 space-y-1">
            <li><a href="tel:+94382254330" className="hover:underline">+94 38 225 4330</a></li>
            <li><a href="#" className="hover:underline">Help Desk</a></li>
            <li><a href="#" className="hover:underline">Why Oxiaura</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer