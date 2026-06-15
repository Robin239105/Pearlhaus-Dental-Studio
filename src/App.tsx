import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

// Page Imports
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import TreatmentDetail from './pages/TreatmentDetail';
import CosmeticDentistry from './pages/CosmeticDentistry';
import GeneralDentistry from './pages/GeneralDentistry';
import Orthodontics from './pages/Orthodontics';
import Implants from './pages/Implants';
import ChildrensDentistry from './pages/ChildrensDentistry';
import EmergencyDental from './pages/EmergencyDental';
import Team from './pages/Team';
import TeamDetail from './pages/TeamDetail';
import About from './pages/About';
import Technology from './pages/Technology';
import Gallery from './pages/Gallery';
import PatientInfo from './pages/PatientInfo';
import NewPatients from './pages/NewPatients';
import PatientForms from './pages/PatientForms';
import Finance from './pages/Finance';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import Accessibility from './pages/Accessibility';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-navy selection:bg-mint-pale selection:text-mint-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/treatments/:slug" element={<TreatmentDetail />} />
            <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
            <Route path="/general-dentistry" element={<GeneralDentistry />} />
            <Route path="/orthodontics" element={<Orthodontics />} />
            <Route path="/implants" element={<Implants />} />
            <Route path="/childrens-dentistry" element={<ChildrensDentistry />} />
            <Route path="/emergency-dental" element={<EmergencyDental />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:slug" element={<TeamDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/patient-info" element={<PatientInfo />} />
            <Route path="/new-patients" element={<NewPatients />} />
            <Route path="/patient-forms" element={<PatientForms />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
