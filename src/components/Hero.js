export default function Hero() {
   return (
      <main className='hero xl:w-auto min-h-screen relative z-30'>
         <div className='hero-content px-0'>
            <div className='relative'>
               <h1 className='text-6xl md:text-7xl sm:leading-tight font-aspekta font-bold mb-0 max-w-lg'>
                  Explore yourself with{' '}
                  <span className='text-base-100 relative z-10 md:top-2'>
                     MBTI
                     <div className='w-[165px] md:w-[195px] h-[65px] md:h-[75px] bg-primary -z-10 absolute top-[10px] md:top-[15px] -left-2 rotate-[-1.6deg]'></div>
                  </span>
               </h1>
               <p className='py-3 text-lg md:text-xl max-w-sm'>
                  Take a journey of self-discovery with MBTI. Platform will guide you in understanding your personality and using your potential!
               </p>
               <div className='md:hidden'>
                  <a href='#personalizer' className='no-underline btn btn-accent text-base-100 btn-md font-aspekta'>
                     Realize my potential
                  </a>
                  <svg
                     className='absolute -bottom-1 left-[170px] -0 w-[170px] skew-x-[15deg] rotate-[5deg] pointer-events-none'
                     width='227'
                     height='106'
                     viewBox='0 0 227 106'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <path
                        className='fill-primary'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M225.277 0.963588C226.091 1.11663 226.627 1.9007 226.474 2.71487C223.37 19.2322 213.445 34.1139 200.672 46.2114C187.893 58.3146 172.173 67.7201 157.284 73.2706C110.971 90.5365 62.1789 93.4104 13.5818 95.0485C12.7538 95.0764 12.06 94.4279 12.0321 93.5999C12.0042 92.772 12.6528 92.0781 13.4807 92.0502C62.0863 90.4118 110.43 87.5363 156.236 70.4596C170.766 65.0428 186.137 55.8462 198.609 44.0333C211.087 32.2147 220.574 17.8664 223.526 2.16067C223.679 1.3465 224.463 0.810548 225.277 0.963588Z'
                     />
                     <path
                        className='fill-primary'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M19.3305 83.6983C20.0888 84.032 20.433 84.9171 20.0994 85.6754C19.5408 86.9448 18.8817 88.0066 17.9938 88.9147C17.1072 89.8216 16.0528 90.5134 14.783 91.1198C10.7677 93.0373 6.29479 94.0268 2.11106 94.7481C1.29468 94.8888 0.518766 94.3411 0.378011 93.5248C0.237255 92.7084 0.784959 91.9325 1.60134 91.7917C5.72254 91.0812 9.86078 90.1459 13.4902 88.4127C14.5382 87.9122 15.2728 87.4064 15.8487 86.8174C16.4232 86.2298 16.9001 85.4976 17.3534 84.4672C17.6871 83.7089 18.5722 83.3647 19.3305 83.6983Z'
                     />
                     <path
                        className='fill-primary'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0.0840231 92.9383C0.320007 92.1442 1.15506 91.6918 1.94916 91.9278C2.62754 92.1294 3.35934 92.3337 4.12637 92.5478C6.77761 93.288 9.84968 94.1457 12.5908 95.4148C16.167 97.0705 19.5175 99.5664 20.9188 103.77C21.1807 104.556 20.756 105.406 19.9701 105.668C19.1842 105.93 18.3347 105.505 18.0727 104.719C17.0463 101.64 14.5594 99.6322 11.3303 98.1371C8.83255 96.9807 6.09133 96.2142 3.47642 95.4831C2.6667 95.2567 1.8691 95.0336 1.09459 94.8035C0.300486 94.5675 -0.151961 93.7324 0.0840231 92.9383Z'
                     />
                  </svg>
               </div>
            </div>
         </div>
      </main>
   )
}
