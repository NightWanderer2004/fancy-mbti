import { types } from '@/data'

export default function MBTI() {
   return (
      <div className='grid gap-2 grid-cols-2 md:grid-cols-4 md:grid-rows-4'>
         {types.map((type, index) => (
            <Type key={index} type={type} />
         ))}
      </div>
   )
}

function Type({ type }) {
   return (
      <a href={`/types/${type.type}`} className='btn justify-start text-start no-underline bg-base-100/80 rounded-lg h-[130px] text-lg'>
         <div>
            <div className='w-16 h-16 bg-accent rounded-md mb-2'></div>
            {type.type}
         </div>
      </a>
   )
}
