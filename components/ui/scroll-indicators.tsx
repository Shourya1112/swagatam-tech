'use client'

import { cn } from '@/lib/cn'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'

interface ConfigValues {
  show?: boolean
  color?: string
}

interface Config {
  top?: ConfigValues
  left?: ConfigValues
  bottom?: ConfigValues
  right?: ConfigValues
}

interface ScrollIndicatorsProps {
  config?: Config
  onScrollChange?: (percentage: number) => void
}

const defaultConfig: Config = {
  top: { show: false, color: 'blue' },
  bottom: { show: false, color: 'blue' },
  left: { show: true, color: 'blue' },
  right: { show: true, color: 'blue' },
}

// Color mapping for Tailwind classes
const colorClasses = {
  red: 'via-red-500',
  blue: 'via-blue-500',
  green: 'via-green-500',
  purple: 'via-purple-500',
  pink: 'via-pink-500',
  yellow: 'via-yellow-500',
  indigo: 'via-indigo-500',
  orange: 'via-orange-500',
  teal: 'via-teal-500',
  cyan: 'via-cyan-500',
} as const

const ScrollIndicators = ({ config, onScrollChange }: ScrollIndicatorsProps) => {
  const { scrollYProgress } = useScroll()

  const [scrollPercentage, setScrollPercentage] = useState(0)

  // Transform scroll progress to percentage (0-100)
  const scrollPercentageValue = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const unsubscribe = scrollPercentageValue.on('change', (latest) => {
      const percentage = Math.round(latest)
      setScrollPercentage(percentage)
      onScrollChange?.(percentage)
    })

    return () => unsubscribe()
  }, [scrollPercentageValue, onScrollChange])

  // merge user config with defaults
  const mergedConfig: Config = useMemo(
    () => ({
      top: { ...defaultConfig.top, ...config?.top },
      left: { ...defaultConfig.left, ...config?.left },
      bottom: { ...defaultConfig.bottom, ...config?.bottom },
      right: { ...defaultConfig.right, ...config?.right },
    }),
    [config]
  )

  return (
    <div className="relative overflow-visible">
      {/* Left */}
      {mergedConfig.left?.show && (
        <div className="fixed inset-y-0 left-0 h-full w-px overflow-visible bg-transparent">
          <motion.div
            style={{ top: `${scrollPercentage / 1.2}vh` }}
            className={cn(
              'fixed h-40 w-1 rounded-full bg-gradient-to-b from-transparent to-transparent',
              colorClasses[mergedConfig.left.color as keyof typeof colorClasses] || 'via-blue-500'
            )}
          />
        </div>
      )}

      {/* Right */}
      {mergedConfig.right?.show && (
        <div className="fixed inset-y-0 right-0 h-full w-px bg-transparent">
          <motion.div
            style={{ top: `${scrollPercentage / 1.2}vh` }}
            className={cn(
              'fixed h-40 w-px bg-gradient-to-b from-transparent to-transparent',
              colorClasses[mergedConfig.right.color as keyof typeof colorClasses] || 'via-blue-500'
            )}
          />
        </div>
      )}

      {/* Bottom */}
      {mergedConfig.bottom?.show && (
        <div className="fixed inset-x-0 bottom-0 h-px w-full bg-transparent">
          <motion.div
            style={{ left: `${scrollPercentage / 1.2}vw` }}
            className={cn(
              'fixed bottom-0 h-px w-40 bg-gradient-to-r from-transparent to-transparent',
              colorClasses[mergedConfig.bottom.color as keyof typeof colorClasses] || 'via-blue-500'
            )}
          />
        </div>
      )}

      {/* Top (optional future use, for now just a bar like bottom) */}
      {mergedConfig.top?.show && (
        <div className="fixed inset-x-0 top-0 h-px w-full bg-transparent">
          <motion.div
            style={{ left: `${scrollPercentage / 1.2}vw` }}
            className={cn(
              'fixed top-0 h-px w-40 bg-gradient-to-r from-transparent to-transparent',
              colorClasses[mergedConfig.top.color as keyof typeof colorClasses] || 'via-blue-500'
            )}
          />
        </div>
      )}
    </div>
  )
}

export default ScrollIndicators
