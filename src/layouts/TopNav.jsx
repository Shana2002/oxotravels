'use client'

import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";

const TopNav = ({isScroll}) => {
  const [scrolled, setScrolled] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  
  useEffect(() => {
    if(isScroll) setScrolled(true);
    const handleScroll = () => {
      if(!isScroll) setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", route: "#hero" },
    { name: "About us", route: "#about" },
    { name: "Destinations", route: "#destinations" },
    { name: "Experience", route: "#experience" },
    { name: "Tours", route: "#tours" },
    { name: "Contact us", route: "#contact" }
  ];


  return (
    <nav className={`flex items-center justify-between px-[5vw] h-[10vh] fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      scrolled ? 'bg-white shadow-md ' : 'bg-transparent'
    }`}>
      <Logo scrolled={scrolled} />

      {/* Desktop Nav */}
      <div className={`lg:flex items-center justify-around gap-15 font-semibold ${scrolled ? 'text-black' : 'text-white'} hidden`}>
        {navItems.map((item) => (
          <NavButton key={item.name} name={item.name} link={item.route} />
        ))}
      </div>

      <button className={`px-4 py-2 rounded-full cursor-pointer hover:bg-[#4ad66d] hover:text-white ${scrolled ? "bg-green-500 text-white font-bold" : "bg-white text-black font-bold"} hidden lg:block`}>
        Get Started
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="bg-green-500 flex items-center justify-center p-1 rounded-full lg:hidden"
        onClick={() => setShowPanel(!showPanel)}
      >
        <IoMenu className="size-6 text-white" />
      </button>

      {/* Backdrop */}
      {showPanel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-30 lg:hidden"
          onClick={() => setShowPanel(false)}
        />
      )}

      {/* Mobile Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-10/12 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 lg:hidden flex flex-col p-6 ${
          showPanel ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Nav Links */}
        <div className="flex flex-col gap-6 text-black mt-10 font-semibold">
          {navItems.map((item) => (
          <NavButton key={item.name} name={item.name} link={item.route} />
        ))}
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => setShowPanel(false)}
          className="mt-auto bg-green-500 text-white px-4 py-2 rounded-full mt-10 font-bold"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
