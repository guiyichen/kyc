'use client'

import Header from '@/components/Header'
import CountriesShowcase from '@/components/CountriesShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header isLoggedIn={false} />
      <main>
        <CountriesShowcase />
      </main>
      <Footer />
    </div>
  )
}
