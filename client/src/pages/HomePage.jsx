import Banners from '../components/Banners'
import DiscountBanner from '../components/DiscountBanner'
import FeaturedProducts from '../components/FeaturedProducts'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'
import SignupBanner from '../components/SignupBanner'







const HomePage = ({setCartChange, carts, notification}) => {
  return (
    <div>
      <Hero/>
      <Features/>
      <FeaturedProducts setCartChange={setCartChange} carts={carts} notification={notification}/>
      <DiscountBanner/>
      <NewProducts setCartChange={setCartChange} carts={carts} notification={notification}/>
      <Banners/>
      <SignupBanner/>
      <Footer/>
    </div>
  )
}

export default HomePage
