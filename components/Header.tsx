'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'

interface HeaderProps {
  isLoggedIn: boolean
}

export default function Header({ isLoggedIn }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">KYC</span>
            </div>
            <span className="text-xl font-bold text-gray-800">交易平台</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition">
              {t('nav.home')}
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-primary-600 transition">
              {t('nav.support')}
            </Link>

            {/* 语言切换按钮 */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-sm font-medium"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="/" className="block py-2 text-gray-600 hover:text-primary-600">
              {t('nav.home')}
            </Link>
            <Link href="/support" className="block py-2 text-gray-600 hover:text-primary-600">
              {t('nav.support')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="block py-2 text-gray-600 hover:text-primary-600"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
