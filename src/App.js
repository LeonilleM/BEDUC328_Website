import SideNavBar from "./components/Sidenavbar.jsx";
import MobileNav from "./components/MobileNavBar.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import About from "./components/About.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {
  return (
    <div>
      <SideNavBar />
      <Disclaimer />
      <MobileNav />
      <HomePage />
    </div>
  );
}

export default App;
