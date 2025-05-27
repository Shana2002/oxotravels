import React from 'react'

const ExperianceCard = ({userImage,userName,message,onHover}) => {
  return (
    <div className='w-full h-full bg-white rounded-3xl flex flex-col cursor-default' onMouseEnter={onHover}>
        <div className='w-full lg:h-2/12 px-3 flex items-center gap-1 py-2'>
            <img src={userImage} alt="user" className='size-10 object-cover rounded-full'  />
            <h2>{userName}</h2>
        </div>
        <div className='lg:my-auto w-11/12 text-justify mx-auto'>
          <p className='line-clamp-2'><span className='ml-2 text-2xl text-green-500'>"</span>{message}<span className='text-2xl text-green-500'>"</span></p>
        </div>
    </div>
  )
}

export default ExperianceCard