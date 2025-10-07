'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowRoundForward } from 'react-icons/io'

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/' },
  { name: 'Services', link: '/' },
  { name: 'Careers', link: '/' },
  { name: 'Contact', link: '/' },
]

const NavBarStatic = ({ scrollPercentage }: { scrollPercentage: number }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const closeMenu = () => {
    setHoverIndex(null)
    setIsHovering(false)
  }

  const scrolled = scrollPercentage > 10

  const initialText = { color: '#000' }
  const animateText = scrolled ? { color: '#fff' } : { color: '#000' }

  return (
    <div
      onMouseLeave={() => closeMenu()}
      className="fixed top-0 left-0 z-50 w-full bg-transparent px-4 pt-4"
    >
      <motion.div className="bg- relative flex h-20 w-full items-center justify-between overflow-hidden rounded-3xl px-10 py-4">
        <motion.div
          initial={{ top: -100, opacity: 0 }}
          animate={scrolled ? { top: 0, opacity: 1 } : { top: -100, opacity: 0 }}
          transition={{
            duration: 0.4,
            type: 'spring',
          }}
          className="absolute left-0 h-full w-full bg-black"
        />

        <div className="relative z-10">
          <div className="flex w-full items-center">
            <motion.p
              initial={initialText}
              animate={animateText}
              className="text-2xl leading-none font-light tracking-wide text-black uppercase"
            >
              Swag<span className="font-bold">atam</span>
            </motion.p>
            {/* <div className="h-6 w-8 rounded-r-full bg-gradient-to-l from-black via-black to-neutral-950"></div> */}
          </div>
          <div className="flex w-full items-center gap-2">
            <motion.div
              initial={{ filter: 'invert(0)' }}
              animate={scrolled ? { filter: 'invert(100)' } : { filter: 'invert(0)' }}
              className="h-3 w-full rounded-l-full bg-gradient-to-r from-black via-black to-white"
            ></motion.div>
            <motion.p
              initial={initialText}
              animate={animateText}
              className="text-sm leading-none font-bold tracking-widest text-black"
            >
              Tech
            </motion.p>
          </div>
        </div>

        <div className="relative z-10 flex h-full gap-8">
          <motion.button
            initial={{ borderColor: '#000' }}
            animate={scrolled ? { borderColor: '#fff' } : { borderColor: '#000' }}
            className="relative flex h-full cursor-pointer items-center justify-center rounded-full border px-6"
          >
            <motion.div
              initial={{ scale: 1, ...initialText }}
              animate={animateText}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xl font-semibold text-black"
            >
              GET IN TOUCH{' '}
              <span className="text-4xl">
                <IoIosArrowRoundForward />
              </span>
            </motion.div>
          </motion.button>

          <motion.div
            initial={{ borderColor: '#000' }}
            animate={scrolled ? { borderColor: '#fff' } : { borderColor: '#000' }}
            className="h-full w-fit overflow-hidden rounded-full border p-0.5"
          >
            <div
              onMouseEnter={() => setIsHovering(true)}
              className="relative flex h-full overflow-hidden rounded-full"
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
                className="flex h-full items-center overflow-hidden"
              >
                {navItems.map((item, idx) => {
                  const inverseIdx = navItems.length - idx
                  return (
                    <motion.div
                      key={idx}
                      initial={{ color: '#000' }}
                      animate={
                        scrolled
                          ? hoverIndex === inverseIdx
                            ? { color: '#000' }
                            : { color: '#fff' }
                          : hoverIndex === inverseIdx
                            ? { color: '#fff' }
                            : { color: '#000' }
                      }
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
                style={scrolled ? { background: '#fff' } : { background: '#000' }}
                className="pointer-events-none absolute top-0 h-full w-24 rounded-full"
              ></motion.div>
              <motion.div
                initial={{ color: '#000' }}
                animate={
                  scrolled
                    ? hoverIndex === null
                      ? { color: '#000' }
                      : { color: '#fff' }
                    : hoverIndex === null
                      ? { color: '#fff' }
                      : { color: '#000' }
                }
                className="relative z-20 hidden h-full w-24 items-center justify-center text-lg font-semibold md:flex"
              >
                MENU
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default NavBarStatic
