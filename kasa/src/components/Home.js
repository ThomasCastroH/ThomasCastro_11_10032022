import "../styles/Home.css"
import Header from './Header'
import Footer from './Footer'
import Gallery from "./Gallery"
import Banner from "./Banner"
import bannerImg from '../assets/home_section_bg.jpg'

function Home() {
  return (
          <div className="container">
            <Header />
            <Banner text='Chez vous, partout et ailleurs' img={bannerImg} alt="Home Banner"/>
            <Gallery />
            <Footer />
          </div>
  )
}

export default Home;
