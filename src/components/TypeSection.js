export default function TypeSection({ heading, content, type, color }) {
   const contrastTypes = ['ESTP', 'ENFP', 'INFJ', 'ESFJ']
   let isContrast = false
   if (contrastTypes.includes(type)) isContrast = true

   return (
      <div className='rounded-xl p-3 shadow-sm' style={{ backgroundColor: `${color}0c` }}>
         <h3 className='text-2xl opacity-85 mt-3 font-aspekta first-letter:uppercase'>{heading}</h3>
         {Array.isArray(content) ? (
            <div className='flex flex-wrap gap-3'>
               {content.map((el, index) => (
                  <span key={index} className='rounded-lg text-lg py-0.5 px-3 text-white' style={{ backgroundColor: `${color}59` }}>
                     <span className={`${isContrast ? 'text-white drop-shadow-md' : ''}`}>{el}</span>
                  </span>
               ))}
            </div>
         ) : (
            <p className='text-lg m-0'>{content}</p>
         )}
      </div>
   )
}
