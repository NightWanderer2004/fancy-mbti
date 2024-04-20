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
      <a href={`/types/${type.type}`} className='btn justify-start no-underline bg-base-100/50 h-20 md:h-24 px-3 rounded-lg'>
         <div className='flex md:flex-col gap-3 md:gap-1 items-center md:items-start'>
            <span
               style={{ backgroundColor: type.color }}
               className='font-aspekta font-normal px-2 py-1.5 text-center text-white text-xl sm:text-lg rounded-md'
            >
               {type.type}
            </span>
            <span style={{ color: type.color }} className='opacity-70 font-aspekta font-medium text-base hidden sm:inline-block'>
               {type.name}
            </span>
         </div>
      </a>
   )
}
