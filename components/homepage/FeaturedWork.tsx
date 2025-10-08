import React from 'react'
import { motion } from 'framer-motion'
import { useDevice } from 'next-device-context'

const featuredWorkData = [
  {
    title: 'Nova SaaS Dashboard',
    description:
      'A modern analytics dashboard for a B2B SaaS startup. Built with Next.js, Supabase, and Tailwind.',
    image: '/images/nova-dashboard.jpg',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    color: '#0b5c3e',
  },
  {
    title: 'Orbit Studio Website',
    description: 'Portfolio site for a design agency, optimized for conversions and SEO.',
    image: '/images/orbit-website.jpg',
    tags: ['React', 'Framer Motion', 'SEO'],
    color: '#EEDABE',
  },
  {
    title: 'Sync CRM Platform',
    description: 'Custom CRM platform for managing client pipelines and automating workflows.',
    image: '/images/sync-crm.jpg',
    tags: ['Node.js', 'PostgreSQL', 'React'],
    color: '#433968',
  },
  {
    title: 'Nova SaaS Dashboard',
    description:
      'A modern analytics dashboard for a B2B SaaS startup. Built with Next.js, Supabase, and Tailwind.',
    image: '/images/nova-dashboard.jpg',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    color: '#E0F4FE',
  },
  {
    title: 'Orbit Studio Website',
    description: 'Portfolio site for a design agency, optimized for conversions and SEO.',
    image: '/images/orbit-website.jpg',
    tags: ['React', 'Framer Motion', 'SEO'],
    color: '#EEDABE',
  },
]

const FeaturedWork = () => {
  const { isMobile } = useDevice()

  return (
    <section className="relative z-20">
      <div className="px-10 pb-10 md:px-0">
        <div className="flex w-full flex-col items-center gap-10 overflow-x-hidden md:flex-row md:pl-20">
          {featuredWorkData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.4,
                // type: 'spring',
                stiffness: 80,
                ease: 'easeInOut',
                damping: 8,
                bounce: 0.5,
                delay: 0.2 * index,
              }}
              style={{
                background: item.color,
                ...(isMobile && index > 1 ? { display: 'none' } : {}),
              }}
              className="group min-h-80 w-full min-w-48 overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg md:min-h-[40rem] md:w-fit md:min-w-[25rem]"
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
