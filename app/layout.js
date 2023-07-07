import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <main className="app">
          <Nav />
        
        
        {children}
        
        </main>
        </body>


      
      
    </html>
  )
}
