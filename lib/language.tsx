'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface LanguageContextType {
  language: 'zh' | 'en'
  setLanguage: (lang: 'zh' | 'en') => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  zh: {
    // 页面标题
    'page.title': '各国KYC要求展示',
    'page.subtitle': '查看欧美日韩等发达国家和地区的KYC验证要求和所需文件',
    
    // 搜索和筛选
    'search.placeholder': '输入国家名称...',
    'filter.all': '所有地区',
    'filter.north_america': '北美',
    'filter.europe': '欧洲',
    'filter.asia': '亚洲',
    'filter.oceania': '大洋洲',
    
    // 国家信息
    'country.view_details': '查看详情',
    'country.processing_time': '处理时间',
    'country.cost': '费用',
    'country.documents': '所需文件',
    'country.requirements': '验证要求',
    'country.kyc_level': 'KYC级别',
    
    // 导航
    'nav.home': '首页',
    'nav.support': '帮助中心',
    
    // 页脚
    'footer.resources': '资源',
    'footer.support': '支持',
    'footer.legal': '法律',
    'footer.help_center': '帮助中心',
    'footer.api_docs': 'API文档',
    'footer.country_list': '国家列表',
    'footer.contact': '联系我们',
    'footer.faq': '常见问题',
    'footer.status': '系统状态',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
    'footer.compliance': '合规声明',
    'footer.copyright': '保留所有权利',
    
    // 国家名称
    'country.us': '美国',
    'country.uk': '英国',
    'country.ca': '加拿大',
    'country.au': '澳大利亚',
    'country.jp': '日本',
    'country.kr': '韩国',
    'country.de': '德国',
    'country.fr': '法国',
    'country.it': '意大利',
    'country.es': '西班牙',
    'country.nl': '荷兰',
    'country.ch': '瑞士',
  },
  en: {
    // 页面标题
    'page.title': 'KYC Requirements by Country',
    'page.subtitle': 'View KYC verification requirements and required documents for developed countries and regions',
    
    // 搜索和筛选
    'search.placeholder': 'Enter country name...',
    'filter.all': 'All Regions',
    'filter.north_america': 'North America',
    'filter.europe': 'Europe',
    'filter.asia': 'Asia',
    'filter.oceania': 'Oceania',
    
    // 国家信息
    'country.view_details': 'View Details',
    'country.processing_time': 'Processing Time',
    'country.cost': 'Cost',
    'country.documents': 'Required Documents',
    'country.requirements': 'Verification Requirements',
    'country.kyc_level': 'KYC Level',
    
    // 导航
    'nav.home': 'Home',
    'nav.support': 'Support',
    
    // 页脚
    'footer.resources': 'Resources',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.help_center': 'Help Center',
    'footer.api_docs': 'API Documentation',
    'footer.country_list': 'Country List',
    'footer.contact': 'Contact Us',
    'footer.faq': 'FAQ',
    'footer.status': 'System Status',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.compliance': 'Compliance Statement',
    'footer.copyright': 'All rights reserved',
    
    // 国家名称
    'country.us': 'United States',
    'country.uk': 'United Kingdom',
    'country.ca': 'Canada',
    'country.au': 'Australia',
    'country.jp': 'Japan',
    'country.kr': 'South Korea',
    'country.de': 'Germany',
    'country.fr': 'France',
    'country.it': 'Italy',
    'country.es': 'Spain',
    'country.nl': 'Netherlands',
    'country.ch': 'Switzerland',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
