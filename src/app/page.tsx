import { Process } from './process';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main>
      <div className="description">
        <h1>Easy Quotation</h1>
        <h2>資料内の「」を『』に変換するツールです。</h2>
      </div>

      <Process />
    </main>
  )
}
