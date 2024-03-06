import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Glow from '@/components/Glow'

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
               <Glow className='top-[30px] md:top-0 -left-[25px] bg-primary/90' />
               <Glow className='top-[1200px] md:top-[600px] -right-[40px] md:-right-[170px] bg-primary/90' />
               <Footer />
            </div>
         </body>
      </html>
   )
}
