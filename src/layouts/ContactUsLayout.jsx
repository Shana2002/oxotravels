import Logo from '@/components/Logo'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import ContactUsForm from './ContactUsForm'
import Footer from '@/components/Footer'

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", href: "https://facebook.com" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
  { icon: <FaYoutube />, label: "YouTube", href: "https://youtube.com" },
  { icon: <FaTiktok />, label: "TikTok", href: "https://tiktok.com" },
]

const ContactUsLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="flex flex-col md:flex-row bg-cover bg-center relative px-6 md:px-16 py-12 md:py-0 min-h-[70vh]"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0 rounded-b-3xl md:rounded-none"></div>

        {/* Left side - Logo & Socials */}
        <div className="relative z-10 flex flex-col items-center justify-center md:w-1/2 text-white text-center md:text-left gap-6">
          <Logo size="text-5xl" scrolled={true} />
          <p className="max-w-sm font-light text-lg leading-relaxed">
            Connect with us on social media and stay updated with our latest news and offers!
          </p>

          <div className="flex gap-6 text-2xl justify-center md:justify-start">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-green-400 transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="relative z-10 md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
          <ContactUsForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  )
}

export default ContactUsLayout
