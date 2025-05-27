import Input from '@/components/Input'
import React from 'react'

const ContactUsForm = () => {
  return (
    <div className='w-10/12 h-10/12 '>
        
        <div className='w-8/12 mx-auto h-full flex items-start justify-center flex-col gap-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-md p-5'>
            <h1 className='font-bold text-3xl'>Contact Us</h1>
            <Input type={"text"} label={"Name"} />
            <Input type={"email"} label={"Email"} />
            <Input type={"textarea"} label={"Message"} />
        </div>
    </div>
  )
}

export default ContactUsForm