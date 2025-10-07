import React, { ReactNode } from 'react'
import NavBar from './navbar/NavBar'
import ScrollIndicators from './ui/scroll-indicators'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-fit min-h-screen w-full">
      <NavBar />
      <div className="">{children}</div>

      {/* <ScrollIndicators /> */}
    </div>
  )
}

export default Container
