import React from 'react'
// import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaSearch} from 'react-icons/fa'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <div className='flex items-center justify-center bg-black text-white p-7 text-xl border-b-gray-800 border-b-[1px]'>
          {/* <div className='flex gap-3 items-center'>
              <FaFacebook/>
              <FaTwitter/>
              <FaInstagram/>
              <FaPinterest/>
          </div> */}
          <div className='text-4xl font-serif font-semibold'><Link href='/'>DevBlog</Link></div>
          {/* <div className='flex gap-3 text-lg items-center'>SEARCH<FaSearch/></div> */}
      </div>
      {/* <div className='bg-black text-white p-5' >
        <ul className='flex justify-center items-center gap-10 list-none'>
          <li>Home</li>
          <li>Categories</li>
          <li>Blog</li>
          <li>Styles</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </>
  )
}

export default Navbar