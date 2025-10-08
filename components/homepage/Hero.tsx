import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

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
    <div className="relative w-full px-6 pt-12 pb-20 md:px-10 md:pt-20">
      <h1 className="relative z-20 text-7xl leading-none font-medium md:text-[clamp(5.5rem,4rem+6vw,10.75rem)]">
        {' '}
        Design Agency Based in India.{' '}
      </h1>{' '}
      <div className="relative z-20 flex items-center justify-end">
        {' '}
        <p className="mt-10 max-w-[70rem] text-right text-lg font-medium text-neutral-700 md:text-right md:text-2xl lg:mt-20">
          {' '}
          We&apos;re a full-stack tech agency helping ambitious brands launch, scale, and dominate
          their markets. <br className="hidden md:block" /> From web and mobile development to cloud
          solutions and product innovation, we turn <br className="hidden md:block" /> bold ideas
          into revenue-driving digital realities.{' '}
          <span className="hidden md:inline">Get Started →</span>{' '}
        </p>{' '}
      </div>
      <div className="relative z-20 flex items-center justify-end px-2 pt-10 md:hidden">
        <button className="relative flex h-full cursor-pointer items-center justify-center rounded-full border border-black px-6">
          <div className="flex items-center gap-2 text-xl font-semibold text-black">
            GET IN TOUCH{' '}
            <span className="text-4xl">
              <IoIosArrowRoundForward />
            </span>
          </div>
        </button>
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
