export default function Response({ response }) {
   return (
      <>
         {response && (
            <div className='font-aspekta'>
               <p dangerouslySetInnerHTML={{ __html: response }} className='m-0'></p>
            </div>
         )}
      </>
   )
}
