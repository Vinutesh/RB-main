import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { SiteLayout } from './components/SiteLayout';
import { PageTransition } from './components/PageTransition';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { InteriorAboutPage } from './pages/interiors/InteriorAboutPage';
import { InteriorContactPage } from './pages/interiors/InteriorContactPage';
import { InteriorGalleryPage } from './pages/interiors/InteriorGalleryPage';
import { InteriorLandingPage } from './pages/interiors/InteriorLandingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ProductPage } from './pages/ProductPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';

function AppRoutes() {
  const location = useLocation();
  const withTransition = (node: ReactNode) => <PageTransition>{node}</PageTransition>;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={withTransition(<HomePage />)} />
          <Route path="about" element={withTransition(<AboutPage />)} />
          <Route path="product" element={withTransition(<ProductPage />)} />
          <Route path="gallery" element={withTransition(<GalleryPage />)} />
          <Route path="contact" element={withTransition(<ContactPage />)} />
          <Route path="interior-designing" element={withTransition(<InteriorLandingPage />)} />
          <Route path="interior-designing/about" element={withTransition(<InteriorAboutPage />)} />
          <Route path="interior-designing/gallery" element={withTransition(<InteriorGalleryPage />)} />
          <Route path="interior-designing/contact" element={withTransition(<InteriorContactPage />)} />
          <Route path="terms" element={withTransition(<TermsPage />)} />
          <Route path="privacy" element={withTransition(<PrivacyPage />)} />
          <Route path="disclaimer" element={withTransition(<DisclaimerPage />)} />
          <Route path="*" element={withTransition(<NotFoundPage />)} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
