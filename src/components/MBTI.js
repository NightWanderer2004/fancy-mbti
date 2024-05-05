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
      <a
         href={`/types/${type.type}`}
         className='btn justify-start no-underline h-20 md:h-24 px-3 rounded-lg border-[2.5px] mix-blend-multiply'
         style={{ backgroundColor: `${type.color}0d`, borderColor: `${type.color}05` }}
      >
         <div className='grid h-full place-items-end'>
            <span style={{ color: type.color }} className='opacity-70 mb-3 font-aspekta font-medium text-base'>
               {type.type}
            </span>
         </div>
      </a>
   )
}
