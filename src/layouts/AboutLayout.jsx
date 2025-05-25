import React from 'react'

const AboutLayout = () => {
  return (
    <div className='w-full h-[90vh] flex flex-col items-center'>
      <h1 className='my-5 font-bold text-2xl text-center'>Explore the infinity</h1>
      <div className='w-full h-full px-[2vw] flex'>
        <div className='w-7/12 relative'>
            <img src="/image1.png" alt="" className='w-full h-full object-cover absolute left-0 top-0' />
            <div className='absolute top-0 left-0 w-full h-full'>
                <h2 className='my-2'>Welcome to Sri Lanks</h2>
                <h3 className='text-3xl font-bold my-2'>Ayubowan</h3>
                <hr className='w-2/6 my-2 text-green-400 h-2'/>
                <p>Sri Lanka is a tropical island nation in South Asia, known for its stunning beaches, ancient temples, rich wildlife, and vibrant culture. From the misty hills of Ella to the historic city of Anuradhapura, Sri Lanka offers a unique blend of adventure, relaxation, and heritage all in one breathtaking destination.</p>
                <p>A land of endless beauty and vibrant culture, Sri Lanka offers unforgettable experiences for every kind of traveler:</p>

            </div>
        </div>
        <div className='w-5/12 relative'>
            <img src="/corrol.png" alt="" className='object-cover w-10/12 h-11/12 rounded-4xl absolute top-0 right-0' />
            <img src="/kesbewa.png" alt="" className='absolute top-20 w-8/12 h-8/12 object-cover left-[-10vh]'/>
        </div>
      </div>
    </div>
  )
}

export default AboutLayout 
