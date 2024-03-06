'use client'
import Hero from '@/components/Hero'
import Personalizer from '@/components/Personalizer'
import Response from '@/components/Response'
import { useState } from 'react'

export default function Home() {
   const [isLoading, setIsLoading] = useState(false)
   const [response, setResponse] = useState('')
   return (
      <div className='relative'>
         <div className='md:flex gap-10 lg:gap-14 xl:gap-16 items-center justify-center'>
            <Hero />
            <div className='absolute bg-primary/90 w-[200px] md:w-[240px] h-[200px] md:h-[240px] rounded-full blur-[130px] top-[30px] md:top-0 -left-[25px] z-20'></div>
            <Personalizer setResponse={setResponse} setIsLoading={setIsLoading} isLoading={isLoading} />
            <div className='absolute bg-primary/90 w-[200px] h-[200px] rounded-full blur-[120px] top-[1200px] md:top-[600px] -right-[40px] md:-right-[170px] z-20'></div>
         </div>
         <Response response={response} isLoading={isLoading} />
      </div>
   )
}
