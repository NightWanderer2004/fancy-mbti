export default function ClearResponse({ handleClear, isLoading }) {
   return (
      <button onClick={handleClear} disabled={isLoading} className='btn btn-error text-white font-aspekta flex w-full max-w-2xl mx-auto mt-6'>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            class='lucide lucide-trash-2'
         >
            <path d='M3 6h18' />
            <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
            <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
            <line x1='10' x2='10' y1='11' y2='17' />
            <line x1='14' x2='14' y1='11' y2='17' />
         </svg>
         Clear response
      </button>
   )
}
