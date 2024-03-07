export default function Response({ response }) {
   return (
      <>
         {response && (
            <div className='font-aspekta'>
               <div className='fixed bottom-0 left-0 w-full h-[70px] bg-gradient-to-b from-transparent to-base-100 blur-lg z-40'></div>
               <p dangerouslySetInnerHTML={{ __html: response }} className='mt-10 mx-auto max-w-2xl relative z-30 md:bottom-[135px]'></p>
            </div>
         )}
      </>
   )
}
