import Image from 'next/image'
import React from 'react'

export default function Navbar() {
   return (
      <nav className='navbar bg-white/55 glass fixed top-0 left-0 z-50 py-0'>
         <div className='flex-1 container mx-auto md:px-12 lg:px-16'>
            <a href='/' className='font-aspekta font-medium text-xl flex items-center gap-1'>
               <Image src='/logo.png' width={44} height={44} />
               <p>
                  <span className='text-primary'>Fancy</span> MBTI
               </p>
            </a>
         </div>
      </nav>
   )
}
