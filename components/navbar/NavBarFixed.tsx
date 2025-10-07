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

const NavBarFixed = () => {
  // const [isHovering, setIsHovering] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number>(0)

  const closeMenu = () => {
    setHoverIndex(0)
    // setIsHovering(false)
  }
  return (
    <motion.div
      initial={{ paddingInline: 0, paddingTop: 0 }}
      animate={{ paddingInline: '1rem', paddingTop: '1rem' }}
      transition={{
        duration: 0.4,
      }}
      onMouseLeave={() => closeMenu()}
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-center bg-transparent px-4 pt-4"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          type: 'spring',
        }}
        className="bg- flex h-20 w-full max-w-5xl items-center justify-between rounded-full bg-black px-4 py-4 backdrop-blur-2xl"
      >
        <div className="">
          <div className="flex w-full items-center">
            <p className="text-2xl leading-none font-light tracking-wide text-white uppercase">
              Swag<span className="font-bold">atam</span>
            </p>
            {/* <div className="h-6 w-8 rounded-r-full bg-gradient-to-l from-white via-white to-neutral-950"></div> */}
          </div>
          <div className="flex w-full items-center gap-2">
            <div className="h-3 w-full rounded-l-full bg-gradient-to-r from-white via-white to-neutral-950"></div>
            <p className="text-sm leading-none font-bold tracking-widest text-white">Tech</p>
          </div>
        </div>

        <div className="flex h-full gap-8">
          <div className="h-full w-fit overflow-hidden rounded-full border border-white p-0.5">
            <div
              // onMouseEnter={() => setIsHovering(true)}
              className="relative flex h-full overflow-hidden rounded-full"
            >
              <motion.div
                // initial={{ width: 0, opacity: 0 }}
                // animate={
                //   isHovering ? { width: 'fit-content', opacity: 1 } : { width: 0, opacity: 0 }
                // }
                // transition={{
                //   duration: 0.7,
                //   type: 'spring',
                // }}
                className="flex h-full items-center overflow-hidden"
              >
                {navItems.map((item, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ color: '#fff' }}
                      animate={hoverIndex === idx ? { color: '#000' } : { color: '#fff' }}
                      onMouseEnter={() => setHoverIndex(idx)}
                      onMouseLeave={() => setHoverIndex(0)}
                      className="relative z-24 flex h-full w-24 cursor-pointer items-center justify-center text-lg font-semibold"
                    >
                      {item.name}
                    </motion.div>
                  )
                })}
              </motion.div>
              <motion.div
                initial={{ left: 0 }}
                animate={{ left: `${hoverIndex * 6}rem` }}
                transition={{
                  duration: 0.8,
                  type: 'spring',
                }}
                className="pointer-events-none absolute top-0 h-full w-24 rounded-full bg-white"
              ></motion.div>
            </div>
          </div>

          <button className="relative flex h-full cursor-pointer items-center justify-center rounded-full border border-white px-6">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xl font-semibold text-nowrap text-white"
            >
              GET IN TOUCH{' '}
              <span className="text-4xl">
                <IoIosArrowRoundForward />
              </span>
            </motion.div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default NavBarFixed
