import React from 'react'

const Logo = ({scrolled=false , size = "text-2xl"}) => {
  return (
    <div className={`flex font-bold ${size} `}>
      <h1 className='text-green-500'>Oxi</h1>
      <h1 className={scrolled?"text-black":"text-white"}>Travels</h1>
    </div>
  )
}

export default Logo
