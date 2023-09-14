import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import About2 from "./components/About2";
import About3 from "./components/About3";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import InstallationService from "./components/InstallationService";
import ParticlesBackground from "./components/ParticlesBackground";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeSell from "./components/WhatWeSell";
import WhoWeAre from "./components/WhoWeAre";
import PlansCard from "./components/PlansCard";
import Navbar from "./components/Navbar.jsx";
import videoSource from "./assets/fondobg.mp4";

const products = [
  {
    title: "Producto 1",
    image: "/img/plan1.jpg",
  },
  {
    title: "Producto 2",
    image: "/img/plan2.jpg",
  },
  {
    title: "Producto 3",
    image: "/img/plan3.jpg",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-[100vh] font-satoshi md:snap-y md:snap-mandatory md:overflow-auto fondoBg scroll-smooth">
      <Navbar />
      <Hero />
      <video
        autoPlay
        muted
        loop
        className="w-[100vw] h-screen object-fill snap-center"
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      {/*<About />
      
        <About2 />
        <About3 />
        <WhatWeDo />
        <WhoWeAre />
        <WhatWeSell />
      <InstallationService />
      <PlansCard />
      <FAQSection />
      <ParticlesBackground />*/}
    </div>
  );
};

export default App;
