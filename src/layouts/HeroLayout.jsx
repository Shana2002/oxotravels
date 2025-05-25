import React from 'react'

const HeroLayout = () => {
  return (
    <div className='w-full h-[100vh] relative bg-white'>
      <img src="/image.png" alt="" className='object-cover h-[100vh] w-full rounded-b-4xl'/>
      <div className='h-[100vh] w-full bg-black absolute top-0 left-0 opacity-20 rounded-b-4xl'></div>
      <div className='h-[100vh] w-full absolute left-0 top-0 flex flex-col items-center justify-center gap-8 rounded-b-4xl'>
        <h1 className='text-white text-5xl font-bold'>Experience the Magic</h1>
        <p className='text-white w-6/12 text-center'>From pristine beaches to lush mountains, experience a vibrant island full of culture, wildlife, and unforgettable memories.</p>
        <button className='text-white border px-6 py-2 rounded-2xl border-white hover:bg-white hover:text-green-500'>Get Start</button>
        <div className='flex gap-2'>
            <div className='w-3 h-3 bg-white rounded-[50%]'></div>
            <div className='w-3 h-3 bg-white rounded-[50%]'></div>
            <div className='w-3 h-3 bg-white rounded-[50%]'></div>
            <div className='w-3 h-3 bg-white rounded-[50%]'></div>
            <div className='w-3 h-3 bg-white rounded-[50%]'></div>
        </div>
      </div>
    </div>
  )
}

export default HeroLayout
