export default function Response({ response }) {
   return (
      <>
         {response && (
            <div className='font-aspekta'>
               <p dangerouslySetInnerHTML={{ __html: response }} className='mt-10 mx-auto max-w-2xl relative z-30 md:bottom-[135px]'></p>
            </div>
         )}
      </>
   )
}
