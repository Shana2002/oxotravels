import React from 'react'

const IconCard = ({icon,text}) => {
  return (
    <div className='w-28 p-2 rounded h-28 border border-green-400 flex flex-col items-center justify-around'>
      <img src={icon} alt="" width={30} height={30} />
      <h4 className='text-xs text-center'>{text}</h4>
    </div>
  )
}

export default IconCard
