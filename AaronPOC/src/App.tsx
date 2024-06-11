import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import DesignersPage from './pages/DesignersPage/DesignersPage'
import ShowcasePage from './pages/ShowcasePage/ShowcasePage'
import ContactPage from './pages/ContactPage/ContactPage'
import NotFound from './pages/NotFound/NotFound'

import StickleyDesignsNavbar from './components/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <StickleyDesignsNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/designers" element={<DesignersPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
