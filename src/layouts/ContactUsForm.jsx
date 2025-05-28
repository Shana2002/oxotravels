import Input from '@/components/Input'
import React from 'react'

const ContactUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-8 flex flex-col gap-8"
        aria-label="Contact Us Form"
      >
        <h1 className="font-extrabold text-4xl text-white tracking-wide text-center">
          Get in Touch
        </h1>

        <Input type="text" label="Name" id="name" required />

        <Input type="email" label="Email" id="email" required />

        <Input type="textarea" label="Message" id="message" required rows={5} />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-400 focus:outline-none text-white font-semibold rounded-xl py-3 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm
