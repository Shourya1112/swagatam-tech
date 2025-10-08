'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useDevice } from 'next-device-context'

interface navItem {
  name: string
  link: string
}

const NavBarFixed = ({ scrolled, navItems }: { scrolled: boolean; navItems: navItem[] }) => {
  const { isMobile } = useDevice()
  const [isHovering, setIsHovering] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const closeMenu = () => {
    setHoverIndex(null)
    setIsHovering(false)
  }

  return (
    <motion.div
      initial={{ top: -100, opacity: 0 }}
      animate={scrolled ? { top: 0, opacity: 1 } : { top: -100, opacity: 0 }}
      transition={{
        duration: 0.4,
        type: 'spring',
      }}
      onMouseLeave={() => closeMenu()}
      className="fixed left-0 z-50 w-screen bg-transparent px-2 pt-2 md:px-4 md:pt-4"
    >
      <div className="relative flex h-16 w-full items-center justify-between overflow-hidden rounded-full border border-neutral-700 bg-neutral-900 p-2 shadow-2xl backdrop-blur-3xl md:h-20 md:p-4">
        <div className="relative z-10 ml-4">
          <div className="flex w-full items-center">
            <p className="leading-none font-light tracking-wide text-white uppercase md:text-2xl">
              Swag<span className="font-bold">atam</span>
            </p>
            {/* <div className="h-6 w-8 rounded-r-full bg-gradient-to-l from-black via-black to-neutral-950"></div> */}
          </div>
          <div className="flex w-full items-center gap-2">
            <div className="h-3 w-full rounded-l-full bg-gradient-to-r from-white via-white to-black"></div>
            <p className="text-sm leading-none font-bold tracking-widest text-white">Tech</p>
          </div>
        </div>

        <div className="relative z-10 flex h-full gap-8">
          <button className="relative hidden h-full cursor-pointer items-center justify-center rounded-full border border-white px-6 md:flex">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xl font-semibold text-white"
            >
              GET IN TOUCH{' '}
              <span className="text-4xl">
                <IoIosArrowRoundForward />
              </span>
            </motion.div>
          </button>

          <div className="h-full w-fit overflow-hidden rounded-full border border-white p-0.5">
            <div
              onMouseEnter={() => !isMobile && setIsHovering(true)}
              className="relative flex h-full flex-col-reverse overflow-hidden rounded-full md:flex-row"
            >
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={
                  isHovering ? { width: 'fit-content', opacity: 1 } : { width: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.7,
                  type: 'spring',
                }}
                className="hidden h-full flex-col items-center overflow-hidden md:flex md:flex-row"
              >
                {navItems.map((item, idx) => {
                  const inverseIdx = navItems.length - idx
                  return (
                    <motion.div
                      key={idx}
                      initial={{ color: '#000' }}
                      animate={hoverIndex === inverseIdx ? { color: '#000' } : { color: '#fff' }}
                      onMouseEnter={() => setHoverIndex(inverseIdx)}
                      onMouseLeave={() => setHoverIndex(null)}
                      className="relative z-24 flex h-full w-24 cursor-pointer items-center justify-center text-lg font-semibold"
                    >
                      {item.name}
                    </motion.div>
                  )
                })}
              </motion.div>
              <motion.div
                initial={{ right: 0 }}
                animate={hoverIndex !== null ? { right: `${hoverIndex * 6}rem` } : { right: 0 }}
                transition={{
                  duration: 0.4,
                  type: 'spring',
                }}
                className="pointer-events-none absolute top-0 h-full w-24 rounded-full bg-white"
              ></motion.div>
              <motion.div
                initial={{ color: '#000' }}
                animate={hoverIndex === null ? { color: '#000' } : { color: '#fff' }}
                className="relative z-20 flex h-full w-24 items-center justify-center text-lg font-semibold"
              >
                MENU
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NavBarFixed
