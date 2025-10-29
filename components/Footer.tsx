'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KYC</span>
              </div>
              <span className="font-bold">交易平台</span>
            </div>
            <p className="text-gray-400">
              安全、合规、专业的数字资产交易平台
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/support" className="hover:text-white transition">{t('footer.help_center')}</Link></li>
              <li><Link href="/api" className="hover:text-white transition">{t('footer.api_docs')}</Link></li>
              <li><Link href="/countries" className="hover:text-white transition">{t('footer.country_list')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/support" className="hover:text-white transition">{t('footer.help_center')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">{t('footer.contact')}</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">{t('footer.faq')}</Link></li>
              <li><Link href="/status" className="hover:text-white transition">{t('footer.status')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/terms" className="hover:text-white transition">{t('footer.terms')}</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">{t('footer.privacy')}</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition">{t('footer.compliance')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 KYC交易平台. {t('footer.copyright')}.</p>
        </div>
      </div>
    </footer>
  )
}
