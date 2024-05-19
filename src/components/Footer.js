export default function Footer() {
   return (
      <footer className='container mx-auto md:px-12 py-4 footer footer-center items-center gap-6 z-50'>
         <nav className='flex gap-3 font-aspekta'>
            <a
               href='https://t.me/nightwanderer2004'
               className='px-3 py-1.5 rounded-lg border-none link-hover text-white bg-secondary'
               target='_blank'
               rel='noopener noreferrer'
            >
               Telegram
            </a>
            <a
               href='https://github.com/NightWanderer2004'
               className=' px-3 py-1.5 rounded-lg link-hover bg-white border-black border'
               target='_blank'
               rel='noopener noreferrer'
            >
               Github
            </a>
            <a
               href='https://x.com/night2004_'
               className=' px-3 py-1.5 rounded-lg border-none link-hover bg-black text-white'
               target='_blank'
               rel='noopener noreferrer'
            >
               X
            </a>
            /
            <a href='https://insigh.to/b/fancy-mbti' target='_blank' className=' px-3 py-1.5 rounded-lg border-none link-hover bg-yellow-400'>
               💡Feedback
            </a>
         </nav>

         <p className='text-center text-accent underline'>
            <a href='/privacy'>All personal information on this site is not stored and kept private</a>
         </p>
      </footer>
   )
}
