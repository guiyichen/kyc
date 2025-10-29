import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/language'

export const metadata: Metadata = {
  title: 'KYC交易平台 - 安全合规的数字资产交易',
  description: '专业的KYC交易平台，支持欧美日韩等发达国家和地区的合规要求',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
