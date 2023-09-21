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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Tutorials from "../src/pages/Tutorials/Tutorials";
import NotFound from "../src/pages/Tutorials/NotFound";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="h-[100vh] md:snap-y md:snap-mandatory md:overflow-auto scroll-smooth font-inter bg-gradient-to-t from-slate-200 to-white">
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
                  <section id="about">
                    <About />
                    <Product />
                  </section>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
