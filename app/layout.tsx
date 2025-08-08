import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TCM Knowledge Hub | 中医知识站',
  description: 'Learn pulse, acupuncture, meridians, face & tongue. 双语中文/English。',
  metadataBase: new URL('https://tcm-learner.vercel.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
