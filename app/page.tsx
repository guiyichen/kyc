'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import CountriesShowcase from '@/components/CountriesShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <CountriesShowcase />
      </main>
      <Footer />
    </div>
  )
}
