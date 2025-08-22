import evo1 from '@/assets/projects/evo/evo-1.png'
import evo2 from '@/assets/projects/evo/evo-2.png'
import evo3 from '@/assets/projects/evo/evo-3.png'
import evo4 from '@/assets/projects/evo/evo-4.png'
import coffee1 from '@/assets/projects/coffee/coffee-1.png'
import coffee2 from '@/assets/projects/coffee/coffee-2.png'
import coffee3 from '@/assets/projects/coffee/coffee-3.png'
import coffee4 from '@/assets/projects/coffee/coffee-4.png'
import valser1 from '@/assets/projects/valser/valser-1.png'
import ddw1 from '@/assets/projects/ddw/ddw-1.png'
import bantik1 from '@/assets/projects/bantik/bantik-1.png'


export const portfolio = [
 {
    id: '1',
    title: 'New website for EvoAcademy',
    slug: 'evoacademy',
    type: 'Website',
    description: 'New website for EvoAcademy',
    image: [ evo4, evo1],
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://evoacademy.az', label: 'Website' },
  },
  {
    id: '2',
    title: 'Mobile App and Dashboard for CoffeeMe',
    slug: 'coffeeme',
    type: 'Website',
    description: 'Mobile App and Dashboard for CoffeeMe',
    image: [coffee4, coffee2],
    tech: ['React Native','React','Tailwind','MongoDB','Node.js'],
    link: { href: 'https://coffeeme.app', label: 'Website' },
  },
  {
    id: '3',
    title: 'New website for Valser',
    type: 'Website',
    description: 'New website for Valser',
    slug: 'valser',
    image: [valser1],
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://valser.az', label: 'Website' },
  },
  {
    id: '4',
    title: 'New website for Digital Diagnostics World',
    type: 'Website',
    description: 'New website for Digital Diagnostics World',
    slug: 'ddw',
    image: [ddw1],
    tech: ['React', 'Tailwind', 'MongoDB', 'Node.js'],
    link: { href: 'https://ddw.az', label: 'Website' },
  },
  {
    id: '5',
    title: 'New website and Mobile App for Bantik',
    type: 'Website',
    description: 'New website and Mobile App for Bantik',
    slug: 'bantik',
    image: [bantik1],
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
      "Founded in 2021 in Baku, Evo Academy operates as a modern educational center specializing in Back-End, Front-End, Graphic/Motion Design, Data Analytics, and Digital Marketing.",
    
      "We developed a responsive, visually engaging website that showcases Evo Academy’s diverse course offerings and experienced mentors with clarity and brand consistency.",
    
      "Our design ensures seamless navigation across devices, highlighting programs and mentors with intuitive UI, fast loading times, and clean layout to enhance user engagement and conversion."
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
      "Core Studio designed and delivered a cohesive multi-platform ecosystem for CoffeeMe—including a consumer-facing mobile app, an admin dashboard, a partner web portal, and a partner mobile/tablet app—all unified under a single vision.",
    
      "Users can explore coffee shops and products tailored to their taste, access exclusive personalized discounts, and enjoy a seamless on-the-go experience through the mobile app.",
    
      "Our admin dashboard empowers CoffeeMe’s team with real-time insights and management tools to monitor performance, oversee content, and drive business decisions efficiently.",
    
      "Partners benefit from both a web-based portal and tablet/mobile application—designed for in-store or on-the-go use—facilitating easy updates, order processing, and customer engagement.",
    
      "Together, these platforms deliver an integrated, scalable solution that connects consumers, operators, and administrators with captivating UX and unified system workflows."
    ],
    images: [
      coffee4,
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
      "Valser MMC is a professional services company in Azerbaijan specializing in legal consulting, accounting, and workplace attestation.",
    
      "We designed and developed a modern, responsive website that clearly communicates Valser’s core services. The goal was to ensure visitors can quickly understand what the company offers and easily find the support they need.",
    
      "Our focus was on creating a clean, trustworthy, and professional interface—highlighting the three main service categories with intuitive navigation, well-structured content, and mobile-friendly design.",
    
      "A calm and reliable color scheme, combined with clear typography and subtle visuals, reinforces Valser’s professional identity and builds credibility with potential clients.",
    
      "The result is a seamless and informative website that positions Valser MMC as a reliable partner for legal, financial, and workplace compliance services."
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
      "Digital Diagnostics World (DDW) offers precise dental diagnostics through advanced digital laboratory technologies and a team of skilled dental professionals.",
    
      "We built a sleek, responsive website that clearly communicates DDW’s core services, including digital panoramic X-ray, intraoral camera examination, TMD (Temporomandibular Joint Disorder) testing, and laser-based caries detection.",
    
      "The design prioritizes a clean, professional interface—ensuring users can easily understand and navigate the diagnostic offerings with confidence and clarity.",
    
      "Visual hierarchy and service segmentation help drive immediate comprehension; mobile-friendly layout ensures patients and partners find essential information effortlessly across devices.",
    
      "The result is a trustworthy and efficient digital presence that reflects DDW’s commitment to ‘Accurate Diagnosis, Healthy Future’ and reinforces its leadership in modern dental diagnostics."
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
      "Bantik.az is a sophisticated e-commerce platform for cosmetics and beauty products, automatically importing around 20,000 items from 1C ERP system.",
    
      "Our implementation harnesses AI to auto-generate product images, descriptions, and other metadata, significantly reducing manual effort while enhancing consistency and quality across the catalog.",
    
      "We integrated dynamic pricing and discount mechanisms fully synchronized with 1C, ensuring promotions and price updates run flawlessly and in real time.",
    
      "The site features a modern 'collection' system as Trendyol, allowing seamless browsing of grouped products by categories, promotions, or trends—optimizing discovery and user engagement.",
        ],
    images: [
      bantik1,
    ],
  },
};
