import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ReviewsPage from './pages/ReviewsPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App