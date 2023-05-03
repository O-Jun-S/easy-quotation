import { Process } from './process';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex flex-col items-center space-y-4 m-6">
        <h1 className="text-4xl font-bold text-sky-500">Easy Quotation</h1>
        <h2 className="text-lg">資料内の「」を『』に変換するツールです。</h2>
      </div>

      <Process />
    </main>
  )
}
