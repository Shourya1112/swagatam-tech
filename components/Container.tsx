'use client'

import { useDevice } from 'next-device-context'
import React, { ReactNode, useEffect, useState } from 'react'
// import ScrollIndicators from './ui/scroll-indicators'

// const config = {
//   left: { show: true, color: 'black' },
//   right: { show: true, color: 'black' },
// }

const Container = ({ children }: { children: ReactNode }) => {
  const { isTouchDevice } = useDevice()

  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isTouchDevice) {
      return
    }

    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const relX = e.clientX - centerX
      const relY = e.clientY - centerY
      setPointer({ x: relX, y: relY })
    }

    const smoothMove = () => {
      // limit movement range (smaller = subtler effect)
      const intensity = 0.05 // movement sensitivity (smaller = less movement)
      const targetX = pointer.x * intensity
      const targetY = pointer.y * intensity

      // linear interpolation for smooth motion
      setTranslate((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.1,
        y: prev.y + (targetY - prev.y) * 0.1,
      }))

      rafId = requestAnimationFrame(smoothMove)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(smoothMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [pointer])

  return (
    <div
      className="h-fit min-h-screen w-screen overflow-hidden transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${-translate.x}px, ${-translate.y}px, 0)`,
      }}
    >
      {/* <NavBar /> */}
      <div>{children}</div>
      {/* <ScrollIndicators config={config} /> */}

      {/* Debug info */}
      <div className="fixed right-2 bottom-2 rounded bg-white/60 px-2 py-1 text-xs text-gray-500">
        x: {pointer.x.toFixed(0)} | y: {pointer.y.toFixed(0)}
      </div>
    </div>
  )
}

export default Container

// import React, { ReactNode } from 'react'
// import NavBar from './navbar/NavBar'
// import ScrollIndicators from './ui/scroll-indicators'

// const config = {
//   left: { show: true, color: 'black' },
//   right: { show: true, color: 'black' },
// }

// const Container = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="h-fit min-h-screen w-full">
//       <NavBar />
//       <div className="">{children}</div>

//       <ScrollIndicators config={config} />
//     </div>
//   )
// }

// export default Container
