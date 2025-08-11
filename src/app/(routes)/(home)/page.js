import React from 'react'

import PortfolioSection from '@/components/portfolio/PortfolioSection'
import Hero from '@/components/hero/Hero'
import Partners from '@/components/partners/Partners'
import evo1 from '@/assets/projects/evo/evo-1.png'


const items = [
  {
    id: 'cs-mobile-1',
    title: 'New website for EvoAcademy',
    slug: 'evoacademy',
    type: 'Website',
    description: 'New website for EvoAcademy',
    image: evo1,
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://evoacademy.az', label: 'Website' },
  },
  {
    id: 'cs-web-1',
    title: 'New website for BP Azerbaijan',
    type: 'Website',
    description: 'New website for BP Azerbaijan',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Sanity'],
    link: { href: 'https://example.com/shopverse', label: 'Live Demo' },
  },
  {
    id: 'cs-mobile-2',
    title: 'CoreFit',
    type: 'Mobile App',
    description: 'Workout planner with AI-generated routines and progress tracking.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    tech: ['React Native', 'Zustand', 'Node.js'],
    link: { href: 'https://example.com/corefit', label: 'Overview' },
  },
  {
    id: 'cs-web-2',
    title: 'CoreCMS',
    type: 'Web App',
    description: 'Lightweight CMS for marketing teams with intuitive editing.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tech: ['Next.js', 'tRPC', 'PostgreSQL', 'Docker'],
    link: { href: 'https://example.com/corecms', label: 'Read More' },
  },
  {
    id: 'cs-web-3',
    title: 'DataBoard',
    type: 'Web App',
    description: 'Analytics dashboard with real-time charts and role-based access.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tech: ['Next.js', 'Tailwind', 'D3.js', 'Auth.js'],
  },
  {
    id: 'cs-mobile-3',
    title: 'TravelGo',
    type: 'Mobile App',
    description: 'City guides and offline maps for smarter trips.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tech: ['React Native', 'Maps SDK', 'SQLite'],
  },
]

const Page = () => {
  return (
    <div>
      <Hero />
      <PortfolioSection
        title="Portfolio"
        // subtitle="Web və Mobile layihelerimizden seçmeler"
        items={items}
      />
      <Partners />
    </div>
  )
}

export default Page
