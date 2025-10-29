'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language'

interface CountryInfo {
  code: string
  name: string
  englishName: string
  flag: string
  region: string
  kycLevel: 'Level 1' | 'Level 2' | 'Level 3'
  documents: string[]
  requirements: string[]
  processingTime: string
  cost: string
}

const countries: CountryInfo[] = [
  {
    code: 'US',
    name: '美国',
    englishName: 'United States',
    flag: '🇺🇸',
    region: 'north_america',
    kycLevel: 'Level 2',
    documents: ['护照或驾照', '社保号码 (SSN)', '地址证明（水电账单）'],
    requirements: ['身份验证', '地址验证', 'SSN验证', '税务信息'],
    processingTime: '1-3个工作日',
    cost: '免费',
  },
  {
    code: 'UK',
    name: '英国',
    englishName: 'United Kingdom',
    flag: '🇬🇧',
    region: 'europe',
    kycLevel: 'Level 2',
    documents: ['护照或国民身份证', '地址证明（3个月内）', '税务识别号码'],
    requirements: ['身份验证', '地址验证', 'AML审核', '税务合规'],
    processingTime: '1-3个工作日',
    cost: '免费',
  },
  {
    code: 'CA',
    name: '加拿大',
    englishName: 'Canada',
    flag: '🇨🇦',
    region: 'north_america',
    kycLevel: 'Level 2',
    documents: ['护照或驾驶证', '社会保险号码 (SIN)', '地址证明'],
    requirements: ['身份验证', 'SIN验证', '地址验证'],
    processingTime: '1-2个工作日',
    cost: '免费',
  },
  {
    code: 'AU',
    name: '澳大利亚',
    englishName: 'Australia',
    flag: '🇦🇺',
    region: 'oceania',
    kycLevel: 'Level 2',
    documents: ['护照', '澳大利亚税号 (TFN)', '地址证明'],
    requirements: ['身份验证', 'TFN验证', '地址验证'],
    processingTime: '2-3个工作日',
    cost: '免费',
  },
  {
    code: 'JP',
    name: '日本',
    englishName: 'Japan',
    flag: '🇯🇵',
    region: 'asia',
    kycLevel: 'Level 3',
    documents: ['护照或住民票', '银行账户信息', '收入证明'],
    requirements: ['身份验证', '住所确认', '收入来源证明', '税务合规'],
    processingTime: '3-5个工作日',
    cost: '免费',
  },
  {
    code: 'KR',
    name: '韩国',
    englishName: 'South Korea',
    flag: '🇰🇷',
    region: 'asia',
    kycLevel: 'Level 3',
    documents: ['护照', '国民身份证', '银行账户证明'],
    requirements: ['身份验证', '住址确认', '银行账户验证'],
    processingTime: '2-4个工作日',
    cost: '免费',
  },
  {
    code: 'DE',
    name: '德国',
    englishName: 'Germany',
    flag: '🇩🇪',
    region: 'europe',
    kycLevel: 'Level 2',
    documents: ['护照或身份证', 'Meldebescheinigung（居住证明）', '税务信息'],
    requirements: ['身份验证', '居住地址验证', 'AML审核'],
    processingTime: '2-3个工作日',
    cost: '免费',
  },
  {
    code: 'FR',
    name: '法国',
    englishName: 'France',
    flag: '🇫🇷',
    region: 'europe',
    kycLevel: 'Level 2',
    documents: ['护照或身份证', '居住证明', '税务识别号码'],
    requirements: ['身份验证', '地址验证', '税务合规'],
    processingTime: '2-3个工作日',
    cost: '免费',
  },
  {
    code: 'IT',
    name: '意大利',
    englishName: 'Italy',
    flag: '🇮🇹',
    region: 'europe',
    kycLevel: 'Level 2',
    documents: ['护照或身份证', '居住证明', '税号 (Codice Fiscale)'],
    requirements: ['身份验证', '地址验证', '税务验证'],
    processingTime: '2-4个工作日',
    cost: '免费',
  },
  {
    code: 'ES',
    name: '西班牙',
    englishName: 'Spain',
    flag: '🇪🇸',
    region: 'europe',
    kycLevel: 'Level 2',
    documents: ['护照或DNI', '居住证明', '税号 (NIF)'],
    requirements: ['身份验证', '地址验证', '税务验证'],
    processingTime: '2-3个工作日',
    cost: '免费',
  },
  {
    code: 'NL',
    name: '荷兰',
    englishName: 'Netherlands',
    flag: '🇳🇱',
    region: 'europe',
    kycLevel: 'Level 2',
    documents: ['护照', 'BSN号码', '地址证明'],
    requirements: ['身份验证', 'BSN验证', '地址验证'],
    processingTime: '1-2个工作日',
    cost: '免费',
  },
  {
    code: 'CH',
    name: '瑞士',
    englishName: 'Switzerland',
    flag: '🇨🇭',
    region: 'europe',
    kycLevel: 'Level 3',
    documents: ['护照', '居留许可', '银行证明', '收入证明'],
    requirements: ['身份验证', '居留验证', '资金来源证明'],
    processingTime: '3-5个工作日',
    cost: '免费',
  },
]

export default function CountriesShowcase() {
  const { language, t } = useLanguage()
  const [filterRegion, setFilterRegion] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const regions = ['all', ...Array.from(new Set(countries.map(c => c.region)))]

  const filteredCountries = countries.filter(country => {
    const matchesRegion = filterRegion === 'all' || country.region === filterRegion
    const matchesSearch = 
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.englishName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesSearch
  })

  const getCountryName = (country: CountryInfo) => {
    return language === 'zh' ? country.name : country.englishName
  }

  const getRegionName = (region: string) => {
    if (region === 'all') return t('filter.all')
    return t(`filter.${region}`)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          {t('page.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('page.subtitle')}
        </p>
      </div>

      {/* 搜索和筛选 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'zh' ? '搜索国家' : 'Search Country'}
            </label>
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'zh' ? '按地区筛选' : 'Filter by Region'}
            </label>
            <select
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              {regions.map(region => (
                <option key={region} value={region}>
                  {getRegionName(region)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 国家列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredCountries.map(country => (
          <div
            key={country.code}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border-2 border-transparent hover:border-primary-500"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-5xl">{country.flag}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                country.kycLevel === 'Level 1' ? 'bg-green-100 text-green-700' :
                country.kycLevel === 'Level 2' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {country.kycLevel}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{getCountryName(country)}</h3>
            <p className="text-sm text-gray-500 mb-3">{country.englishName}</p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>📍 {getRegionName(country.region)}</span>
              <span>⏱️ {country.processingTime}</span>
            </div>
            <a 
              href="https://t.me/gavingui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg transition block text-center"
            >
              {t('country.view_details')}
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}
