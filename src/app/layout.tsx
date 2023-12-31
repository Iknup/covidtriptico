import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PIMS-Ucebol',
  description: 'Sindrome inflamatorio multisistemico past Covid-19',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className + 'font-NotoSans text-Text'}>
        {children}
        <footer>
          <div className='w-full h-50 lg:w-[1024px] flex mx-auto'>
            <div className='w-[30%] lg:w-1/5'>
              <Image
                src={'/ucebollogo.jpeg'}
                width={0}
                height={0}
                sizes='100vh'
                style={{ width: '100%', height: '100%' }}
                alt='ucebol'
              />
            </div>
            <div
              className='grid grid-cols-1 ml-3 gap-1 lg:flex lg:flex-col 
            lg:my-auto place-items-center lg:mx-auto'
            >
              <h3>Universidad Cristiana de Bolivia</h3>
              <p>Carrera: Infectologia II</p>
              <p>Docente: Ivan Rodrigo Castedo</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
