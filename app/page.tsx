'use client'

import Container from '@/components/Container'
import FeaturedWork from '@/components/homepage/FeaturedWork'
import Hero from '@/components/homepage/Hero'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Container>
      <div className="min-h-[200vh] w-full">
        <Hero />
        <FeaturedWork />
      </div>
    </Container>
  )
}
