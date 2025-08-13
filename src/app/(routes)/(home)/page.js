import React from 'react'

import PortfolioSection from '@/components/portfolio/PortfolioSection'
import Hero from '@/components/hero/Hero'
import Partners from '@/components/partners/Partners'
import { portfolio } from '@/hooks/ProjectDatas'




const Page = () => {
  return (
    <div>
      <Hero />
      <PortfolioSection
        title="Portfolio"
        // subtitle="Web və Mobile layihelerimizden seçmeler"
        items={portfolio}
      />
      <Partners />
    </div>
  )
}

export default Page
