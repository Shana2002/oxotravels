import React from 'react'

const Input = ({label,type,value,onChange}) => {
    if(type != "textarea"){
        return (
            <div className='flex flex-col gap-2 w-full text-white'>
                <label>{label}</label>
                <input className='bg-white px-4 py-2 rounded focus:outline-none' type={type}  />
            </div>
        )
    }
    if(type==="textarea"){
        return (
            <div className='flex flex-col gap-2 w-full  text-white'>
                <label>{label}</label>
                <textarea className='bg-white px-4 py-2 rounded focus:outline-none' rows={5}></textarea>
            </div>
        )
    }
}

export default Input