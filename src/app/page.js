'use client'
import Glow from '@/components/Glow'
import Hero from '@/components/Hero'
import Personalizer from '@/components/Personalizer'
import Response from '@/components/Response'
import { useState } from 'react'
import { Toaster } from 'sonner'

export default function Home() {
   const [isLoading, setIsLoading] = useState(false)
   const [response, setResponse] = useState('')
   return (
      <div className='relative'>
         <Toaster position='bottom-right' richColors />
         <div className='container mx-auto sm:grid sm:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center animate-fadeUp z-20 relative'>
            <Hero />
            <Personalizer setResponse={setResponse} setIsLoading={setIsLoading} isLoading={isLoading} />
         </div>
         <Response response={response} isLoading={isLoading} />
         <Glow className='top-[30px] md:top-0 -left-[25px] bg-primary/90' />
         <Glow className='top-[1200px] md:top-[600px] -right-[40px] md:-right-[170px] bg-primary/90' />
      </div>
   )
}
