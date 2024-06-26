import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Home from "./scenes/home/Home"
import ItemDetails from '../src/scenes/itemDetails/ItemDetails'
import Checkout from '../src/scenes/checkout/Checkout'
import Conformation from '../src/scenes/checkout/Conformation'
import Navbar from './scenes/global/Navbar'
import CartMenu from './scenes/global/CartMenu'
import Footer from './scenes/global/Footer'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return <div className="app">
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/success" element={<Conformation />} />
        </Routes>
        <CartMenu />
        <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
