export default function TypeSection({ heading, content, color }) {
   return (
      <div>
         <h3 className='text-2xl font-aspekta first-letter:uppercase'>{heading}</h3>
         {Array.isArray(content) ? (
            <div className='flex flex-wrap gap-3'>
               {content.map((el, index) => (
                  <span key={index} className='border rounded-full text-base opacity-80 py-0.5 px-3' style={{ color: color, borderColor: color }}>
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
