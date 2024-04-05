import Image from 'next/image'
import React from 'react'

export default function Navbar() {
   return (
      <nav className='navbar fixed top-0 left-0 z-[999] py-0'>
         <div className='justify-between container mx-auto md:px-12 lg:px-16'>
            <a href='/' className='btn btn-ghost font-aspekta font-medium text-lg flex items-center gap-1 bg-gray-200/30 backdrop-blur-md px-3'>
               <Image src='/logo.png' width={36} height={36} />
               <span className='text-accent'>Fancy</span> MBTI
            </a>
            <a href='/types' className='btn btn-ghost font-aspekta font-medium text-accent text-lg bg-gray-200/30 backdrop-blur-md px-3'>
               Types
            </a>
         </div>
      </nav>
   )
}
