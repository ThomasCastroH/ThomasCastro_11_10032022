import "../styles/App.css"
import Header from './Header'
import Footer from './Footer'
import Gallery from "./Gallery"
import Banner from "./Banner"

function App() {
  return (<div className="container">
            <Header />
            <Banner />
            <Gallery />
            <Footer />
          </div>
  )
}

export default App;
