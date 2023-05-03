import './globals.css'
import classNames from 'classnames'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Quotion',
  description: 'Made by Ojun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={classNames(inter.className, "bg-neutral-300")}>{children}</body>
    </html>
  )
}
