'use client'
import Hero from '@/components/Hero'
import Personalizer from '@/components/Personalizer'
import Response from '@/components/Response'
import { useState } from 'react'

export default function Home() {
   const [isLoading, setIsLoading] = useState(false)
   const [response, setResponse] = useState('')
   return (
      <div>
         <div className='md:flex gap-10 lg:gap-14 xl:gap-16 items-center justify-center animate-fadeUp'>
            <Hero />
            <Personalizer setResponse={setResponse} setIsLoading={setIsLoading} isLoading={isLoading} />
         </div>
         <Response response={response} isLoading={isLoading} />
      </div>
   )
}
