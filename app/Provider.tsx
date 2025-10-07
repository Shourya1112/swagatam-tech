'use client'

import React, { ReactNode } from 'react'
import { DeviceProvider } from 'next-device-context'
import { ThemeProvider } from './theme-provider'

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <DeviceProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </DeviceProvider>
  )
}

export default Provider
