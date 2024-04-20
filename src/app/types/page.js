import Glow from '@/components/Glow'
import MBTI from '@/components/MBTI'

export default function Types() {
   return (
      <div className='pt-24 relative z-40 animate-fadeUp max-w-2xl mx-auto'>
         <Glow className='top-[170px] scale-[1800%] md:-top-[200px] -left-[55px] bg-primary/90' />
         <Glow className='top-[1350px] md:top-[1200px] left-[90px] md:left-[115%] bg-primary' />
         <div className='mb-16 relative'>
            <h1 className='text-5xl md:text-7xl sm:leading-tight font-aspekta font-bold mb-0'>All MBTIs</h1>
            <p className='text-base md:text-xl'>
               Here are all the MBTI types. Select any and inspect useful information about it.
               <span className='text-accent text-sm font-aspekta block mt-2'>
                  Note: This is common information taken from the internet. Each human is unique and cannot be defined entirely.
               </span>
            </p>
         </div>
         <MBTI />
      </div>
   )
}
