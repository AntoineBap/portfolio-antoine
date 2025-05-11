import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./styles/app.scss";

function App() {
  return (
    <HashRouter basename="/portfolio-antoine">
      <AppContent />
    </HashRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="work/:id" element={<Work />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;


