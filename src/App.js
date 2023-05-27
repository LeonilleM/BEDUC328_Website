import SideNavBar from "./components/Sidenavbar.jsx";
import MobileNav from "./components/MobileNavBar.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <div>
      <Disclaimer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
