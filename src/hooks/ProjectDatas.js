import evo1 from '@/assets/projects/evo/evo-1.png'
import coffee1 from '@/assets/projects/coffee/coffee-1.png'
import coffee2 from '@/assets/projects/coffee/coffee-2.png'
import coffee3 from '@/assets/projects/coffee/coffee-3.png'
import valser1 from '@/assets/projects/valser/valser-1.png'
import ddw1 from '@/assets/projects/ddw/ddw-1.png'
import bantik1 from '@/assets/projects/bantik/bantik-1.png'


import evo2 from "@/assets/projects/evo/evo-2.png"
import evo3 from "@/assets/projects/evo/evo-3.png"
export const portfolio = [
 {
    id: '1',
    title: 'New website for EvoAcademy',
    slug: 'evoacademy',
    type: 'Website',
    description: 'New website for EvoAcademy',
    image: evo1,
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://evoacademy.az', label: 'Website' },
  },
  {
    id: '2',
    title: 'Mobile App and Dashboard for CoffeeMe',
    slug: 'coffeeme',
    type: 'Website',
    description: 'Mobile App and Dashboard for CoffeeMe',
    image: coffee2,
    tech: ['React Native','React','Tailwind','MongoDB','Node.js'],
    link: { href: 'https://coffeeme.app', label: 'Website' },
  },
  {
    id: '3',
    title: 'New website for Valser',
    type: 'Website',
    description: 'New website for Valser',
    slug: 'valser',
    image: valser1,
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://valser.az', label: 'Website' },
  },
  {
    id: '4',
    title: 'New website for Digital Diagnostics World',
    type: 'Website',
    description: 'New website for Digital Diagnostics World',
    slug: 'ddw',
    image: ddw1,
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://ddw.az', label: 'Website' },
  },
  {
    id: '5',
    title: 'New website and Mobile App for Bantik',
    type: 'Website',
    description: 'New website and Mobile App for Bantik',
    slug: 'bantik',
    image: bantik1,
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://bantik.az', label: 'Website' },
  }
]

export const CASE_STUDIES = {
  evoacademy: {
    title: "Website for EvoAcademy",
    client: "EvoAcademy",
    link: { href: "https://evoacademy.az", label: "evoacademy.az" },
    description: [
      "In early 2022, we began our collaboration with the leading carrier and largest airline in Azerbaijan - AZAL.",
      "Throughout our partnership, we focused on developing a new website with a user-friendly interface. Recognizing the website's significance as a crucial sales platform for airlines, we prioritized creating a convenient, seamless and efficient user experience.",
      "We applied our expertise to elevate the website and ensure it met the standards of the best airline websites.",
    ],
    images: [
      evo1,
      evo2,
      evo3,
    ],
  },
  coffeeme: {
    title: "Dashboard and Mobile App for CoffeeMe",
    client: "CoffeeMe",
    link: { href: "https://coffeeme.app", label: "coffeeme.app" },
    description: [
      "Core Studio successfully developed a dashboard and mobile app for CoffeeMe.",
      "Discover coffee shops and products that match your taste, and explore personalized discounts on items you’ll love.",
    ],
    images: [
      coffee1,  
      coffee2,
      coffee3
    ],
  },
  valser: {
    title: "Website for Valser",
    client: "Valser",
    link: { href: "https://valser.az", label: "valser.az" },
    description: [
      "Core Studio successfully developed a website for Valser.",
      "Our work spanned web presence, brand materials and internal comms systems.",
    ],
    images: [
      valser1,
    ],
  },
  ddw: {
    title: "Website for Digital Diagnostics World",
    client: "Digital Diagnostics World",
    link: { href: "https://ddw.az", label: "ddw.az" },
    description: [
      "Core Studio successfully developed a website for Digital Diagnostics World.",
      "Our work spanned web presence, brand materials and internal comms systems.",
    ],
    images: [
      ddw1,
    ],
  },
  bantik: {
    title: "Website and Mobile App for Bantik",
    client: "Bantik",
    link: { href: "https://bantik.az", label: "bantik.az" },
    description: [
      "Core Studio successfully developed a website and mobile app for Bantik.",
      "Our work spanned web presence, brand materials and internal comms systems.",
    ],
    images: [
      bantik1,
    ],
  },
};
