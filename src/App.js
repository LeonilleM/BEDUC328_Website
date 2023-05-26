import SideNavBar from "./components/Sidenavbar.jsx";
import MobileNav from "./components/MobileNavBar.jsx";
import About from "./components/About.jsx";
import Information1 from "./components/info_1.jsx";

function App() {
  return (
    <div className="bg-grey-custom">
      <SideNavBar />
      <MobileNav />
      <About />
      <Information1 />
    </div>
  );
}

export default App;
