import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import React from 'react'

const TopNav = () => {
  return (
    <nav className='flex items-center justify-between px-2 py-4 fixed top-0 left-0 w-full z-50'>
      <Logo/>
      <div className='flex items-center justify-around gap-4'>
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
