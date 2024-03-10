export default function TypeHeading({ heading, content }) {
   return (
      <div>
         <h3 className='text-2xl font-aspekta first-letter:uppercase'>{heading}</h3>
         {Array.isArray(content) ? (
            <div className='flex flex-wrap gap-3'>
               {content.map((el, index) => (
                  <span key={index} className='badge badge-accent badge-outline text-base p-3'>
                     {el}
                  </span>
               ))}
            </div>
         ) : (
            <p className='text-lg'>{content}</p>
         )}
      </div>
   )
}
