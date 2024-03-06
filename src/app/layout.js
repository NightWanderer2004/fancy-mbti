import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
   title: 'Fancy MBTI',
   description: 'Explore yourself with MBTI',
}

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <head>
            <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
            <link rel='manifest' href='/site.webmanifest' />
            <meta name='theme-color' content='#c8d5bb' />
         </head>
         <body className='overflow-x-hidden'>
            <div className='flex flex-col min-h-screen overflow-hidden relative'>
               <Navbar />
               <div className='container mx-auto px-5 md:px-12 lg:px-16 pb-[140px] flex-1 prose max-w-full'>{children}</div>
               <div className='absolute bg-primary/90 w-[200px] md:w-[240px] h-[200px] md:h-[240px] rounded-full blur-[100px] top-[30px] md:top-0 -left-[25px] z-20'></div>
               <div className='absolute bg-primary/90 w-[200px] h-[200px] rounded-full blur-[90px] top-[1200px] md:top-[600px] -right-[40px] md:-right-[170px] z-20'></div>
               <Footer />
            </div>
         </body>
      </html>
   )
}
