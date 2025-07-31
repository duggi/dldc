import TopBar from '@/components/TopBar'
import HomeHero from '@/components/HomeHero'
import About from '@/components/About'
import ShowcaseGrid from '@/components/ShowcaseGrid'
import MosaicGrid from '@/components/MosaicGrid'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
    <TopBar />
    <HomeHero />
    <About />
    <MosaicGrid />
    <Footer />
    </>
  )
}
