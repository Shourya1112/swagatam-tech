import React from 'react'

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
  return (
    <section className="relative z-20">
      <div className="pb-10">
        <div className="flex w-full gap-10 overflow-x-auto pl-20">
          {featuredWorkData.map((item, index) => (
            <div
              key={index}
              style={{ background: item.color }}
              className="group min-h-[40rem] min-w-[25rem] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
