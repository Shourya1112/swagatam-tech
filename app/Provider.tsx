'use client'

import React, { ReactNode } from 'react'
import { DeviceProvider } from 'next-device-context'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import NavBar from '@/components/navbar/NavBar'

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <DeviceProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <NavBar />
        {children}
      </NextThemesProvider>
    </DeviceProvider>
  )
}

export default Provider
