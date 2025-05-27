'use client'

import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";

const TopNav = () => {
  const  [scrolled,setScrolled] = useState(false);
  const [showPanel,setShowPanel] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrolled(window.scrollY >20);
    }

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])
  // `flex items-center justify-around gap-4 ` ${scrolled ? 'text-black':'text-white'}

  return (
    <nav className={`flex items-center justify-between px-[2vw] h-[10vh] fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <Logo scrolled={scrolled}/>
      <div className={`lg:flex items-center justify-around gap-4 ${scrolled ? 'text-black' : 'text-white'} hidden`}>
        <NavButton name={"Home"} />
        <NavButton name={"About us"} />
        <NavButton name={"Destinations"} />
        <NavButton name={"Experciance"} />
        <NavButton name={"Tours"} />
        <NavButton name={"Contact us"} />
      </div>
      <button className={`px-3 py-2 rounded ${scrolled ? "bg-green-500 text-white":"bg-white text-black"} hidden lg:block`}>Get Started</button>
      <button className='bg-green-500 flex items-center justify-center p-1 rounded-full lg:hidden' onClick={()=>setShowPanel(!showPanel)}><IoMenu  className='size-6'/></button>
      {showPanel && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setShowPanel(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-10/12 bg-green-500 transform transition-transform duration-500 ease-in-out z-40 lg:hidden ${
          showPanel ? 'translate-x-0' : 'translate-x-full'
        }`}
      ></div>
    </nav>
  )
}
export default TopNav
