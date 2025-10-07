import React, { ReactNode } from 'react'
import NavBar from './NavBar'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-fit min-h-screen w-full">
      <NavBar />
      <div className="">{children}</div>
    </div>
  )
}

export default Container
