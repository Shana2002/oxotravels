import Logo from '@/components/Logo'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import ContactUsForm from './ContactUsForm';

const ContactUsLayout = () => {
  return (
    <div className='w-full px-[2vw] h-full  flex flex-col'>
        <div className="h-[70vh] flex gap-1 bg-[url('/image.png')] bg-cover bg-center">
            <div className='w-1/2 flex flex-col items-center justify-center'>
                <Logo size='text-5xl' scrolled={true}/>
                <div className='mt-4 flex items-center gap-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width={30} />
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width={30} />
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width={30} />
                    <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width={30} />
                </div>
            </div>
            <div className='w-1/2  flex flex-col items-center justify-center'>
                <ContactUsForm />
            </div>
        </div>
    </div>
  )
}

export default ContactUsLayout