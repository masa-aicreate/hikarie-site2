import Header from './components/Header'
import Footer from './components/Footer'
import StickyBook from './components/StickyBook'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'

export default function App() {
  return (
    <>
      <Header />
      <StickyBook />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </>
  )
}