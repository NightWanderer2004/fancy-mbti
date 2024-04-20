export default function Footer() {
   return (
      <footer className='container mx-auto md:px-12 py-4 footer footer-center items-center gap-6 z-50'>
         <nav className='flex gap-3'>
            <a
               href='https://t.me/nightwanderer2004'
               className='badge link-hover badge-secondary text-white badge-lg p-3'
               target='_blank'
               rel='noopener noreferrer'
            >
               Telegram
            </a>
            <a
               href='https://github.com/NightWanderer2004'
               className='badge link-hover bg-white badge-lg p-3 badge-outline'
               target='_blank'
               rel='noopener noreferrer'
            >
               Github
            </a>
            <a
               href='https://x.com/night2004_'
               className='badge link-hover bg-black text-white badge-lg p-3 badge-outline'
               target='_blank'
               rel='noopener noreferrer'
            >
               X
            </a>
         </nav>
         <p className='text-center text-accent'>All personal information on this site is not stored and kept private</p>
      </footer>
   )
}
