export default function TypeSection({ heading, content, type, color }) {
   const contrastTypes = ['INFJ', 'ESTJ', 'ISFJ']
   let isContrast = false
   if (contrastTypes.includes(type)) isContrast = true

   return (
      <div className='rounded-xl h-auto p-3 border-[3px]' style={{ backgroundColor: `${color}0c`, borderColor: `${color}05` }}>
         <h3 className='text-2xl mix-blend-multiply opacity-85 mt-1 font-aspekta first-letter:uppercase'>{heading}</h3>
         {Array.isArray(content) ? (
            <div className='flex flex-wrap gap-3'>
               {content.map((el, index) => (
                  <span key={index} className='rounded-lg text-lg py-0.5 px-3 text-white' style={{ backgroundColor: `${color}59` }}>
                     <span className={`${isContrast ? 'text-neutral' : ''}`}>{el}</span>
                  </span>
               ))}
            </div>
         ) : (
            <p className='text-lg m-0'>{content}</p>
         )}
      </div>
   )
}
