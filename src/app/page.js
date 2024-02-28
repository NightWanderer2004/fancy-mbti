import Hero from '@/components/Hero'
import Personalizer from '@/components/Personalizer'

export default function Home() {
   return (
      <div>
         <div className='lg:flex gap-10 items-center justify-center'>
            <Hero />
            <Personalizer />
         </div>
      </div>
   )
}
