import "./App.css";
import { Provider } from "react-redux";
import store from "./components/store";
import About from "./components/About";
import Product from "./components/Product";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import InstallationService from "./components/InstallationService";
import Navbar from "./components/Navbar.jsx";
import Video from "./components/Video";
import PlansCardHeizahn from "./components/PlansCardHeaizahn";
import VSOL from "./pages/Tutorials/VSOL/VSOL";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Tutorials from "../src/pages/Tutorials/Tutorials";
import NotFound from "../src/pages/Tutorials/NotFound";
import ADC from "./pages/Tutorials/ADC/ADC";
import Tenda from "./pages/Tutorials/Tenda/Tenda";
import SpeedTest from "./pages/Tutorials/SpeedTest/SpeedTest";
import NetworkAnalyzer from "./pages/Tutorials/NetworkAnalyzer/NetworkAnalyzer";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="h-[100vh] lg:snap-y lg:snap-mandatory lg:overflow-auto overflow-x-hidden scroll-smooth font-inter bg-gradient-to-t from-slate-200 to-white">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Navbar />
                  <section id="home">
                    <Hero />
                  </section>
               
                    {/* <AboutMobile/> */}
                    <About />
                    <Product />
                 
                  <Video />
                  <section id="services">
                    <InstallationService />
                  </section>
                  <section id="plans">
                    <PlansCardHeizahn />
                  </section>
                  <section id="faq">
                    <FAQSection />
                  </section>
                </>
              }
            />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorials/vsol" element={<VSOL />} />
            <Route path="/tutorials/adc" element={<ADC />} />
            <Route path="/tutorials/tenda" element={<Tenda />} />
            <Route path="/tutorials/speedtest" element={<SpeedTest />} />
            <Route
              path="/tutorials/networkanalyzer"
              element={<NetworkAnalyzer />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
