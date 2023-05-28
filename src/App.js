import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Navbars for Desktop & Mobile
import SideNavBar from "./components/Sidenavbar.jsx";
import MobileNav from "./components/MobileNavBar.jsx";
// Pages
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ResourcePage from "./Pages/ResourcePage.jsx";
// Disclaimer toast
import Disclaimer from "./components/Disclaimer.jsx";


function App() {
  return (
    <div>
      <Disclaimer />
      <BrowserRouter>
      <div>
        <SideNavBar />
        <MobileNav />
      </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resource" element={<ResourcePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
