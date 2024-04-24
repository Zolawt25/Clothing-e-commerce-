import Banners from '../components/Banners'
import DiscountBanner from '../components/DiscountBanner'
import FeaturedProducts from '../components/FeaturedProducts'
import Features from '../components/Features'
import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'







const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <FeaturedProducts/>
      <DiscountBanner/>
      <NewProducts/>
      <Banners/>
    </div>
  )
}

export default HomePage
