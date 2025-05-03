import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {/* <div className='bg-red-950 text-white grid grid-cols-2'>
        <div className='px-10 gap-10'>
          <h2 className='font-bold'>Home</h2>
          <p>About</p>
          <p>Services</p>
          <p>About</p>
        </div>
        
        <div className=''>
          <h2 className='font-bold'>Links</h2>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>


      </div> */}

    <footer className="bg-gradient-to-r bg-red-950 from-red-800 to-red-700 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🍔 Burger Lab</h2>
          <p className="text-sm">Crafting juicy burgers, one bite at a time.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Locations</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm mb-2">Get tasty deals in your inbox.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-black"
            />
            <button className="bg-white text-red-600 font-semibold py-2 rounded hover:bg-yellow-100 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-200"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-200"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-200"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Burger Lab. All rights reserved.
      </div>
    </footer>
     
    </>
  )
}

export default Footer