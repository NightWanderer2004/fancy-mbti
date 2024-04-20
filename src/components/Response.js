import { useState, useEffect } from 'react'

export default function Response({ response }) {
   const [showSvg, setShowSvg] = useState(true)

   useEffect(() => {
      const handleScroll = () => {
         window.scrollY > 160 ? setShowSvg(false) : setShowSvg(true)
      }
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <>
         {response && (
            <div className='font-aspekta flex flex-col items-center'>
               <button
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                  className='hidden md:block relative bottom-12 z-40 animate-bounce text-primary transition-opacity'
                  style={{ opacity: showSvg ? '1' : '0', pointerEvents: showSvg ? 'auto' : 'none' }}
               >
                  <svg
                     className='scale-125 pointer-events-none'
                     xmlns='http://www.w3.org/2000/svg'
                     width='24'
                     height='24'
                     viewBox='0 0 24 24'
                     fill='none'
                     stroke='currentColor'
                     strokeWidth='2'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     <path d='m6 9 6 6 6-6' />
                  </svg>
               </button>
               <p dangerouslySetInnerHTML={{ __html: response }} className='mt-14 mx-auto max-w-2xl relative z-30'></p>
            </div>
         )}
      </>
   )
}
