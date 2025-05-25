'use client'

import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import React, { useEffect, useState } from 'react'

const TopNav = () => {
  const  [scrolled,setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrolled(window.scrollY >20);
    }

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])
  // `flex items-center justify-around gap-4 ` ${scrolled ? 'text-black':'text-white'}

  return (
    <nav className={`flex items-center justify-between px-2 h-[10vh] fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <Logo/>
      <div className={`flex items-center justify-around gap-4 ${scrolled ? 'text-black' : 'text-white'}`}>
        <NavButton name={"Home"} />
        <NavButton name={"Home"} />
        <NavButton name={"Home"} />
        <NavButton name={"Home"} />
      </div>
      <button className='bg-white px-3 py-2 rounded'>Get Started</button>
    </nav>
  )
}
export default TopNav
