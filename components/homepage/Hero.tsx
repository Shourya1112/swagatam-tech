import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingBlob = ({ initialTop, initialLeft }: { initialTop: number; initialLeft: number }) => {
  const [pos, setPos] = useState({ top: initialTop, left: initialLeft })

  const offset = 20

  useEffect(() => {
    const interval = setInterval(() => {
      setPos({
        top: Math.abs(initialTop - Math.random() * offset),
        left: Math.abs(initialLeft - Math.random() * offset),
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      animate={{ top: `${pos.top}%`, left: `${pos.left}%` }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="absolute aspect-square w-[40rem] rounded-full bg-blue-300 opacity-20 blur-3xl even:bg-green-300"
    />
  )
}

export default function Hero() {
  return (
    <div className="relative h-[calc(80vh)] w-full px-10">
      <h1 className="relative z-20 mt-40 text-[clamp(5.5rem,4rem+6vw,10.75rem)] leading-none font-medium">
        {' '}
        Design Agency Based in India.{' '}
      </h1>{' '}
      <div className="relative z-20 flex items-center justify-end">
        {' '}
        <p className="mt-10 max-w-[70rem] text-right text-2xl font-medium text-neutral-700 md:text-right lg:mt-20">
          {' '}
          We&apos;re a full-stack tech agency helping ambitious brands launch, scale, and dominate
          their markets. <br /> From web and mobile development to cloud solutions and product
          innovation, we turn <br /> bold ideas into revenue-driving digital realities. Get Started
          →{' '}
        </p>{' '}
      </div>
      {/* tr */}
      <FloatingBlob initialTop={0} initialLeft={70} />
      {/* br */}
      <FloatingBlob initialTop={70} initialLeft={70} />
      {/* bl */}
      <FloatingBlob initialTop={70} initialLeft={0} />
      {/* tl */}
      <FloatingBlob initialTop={0} initialLeft={0} />
    </div>
  )
}
