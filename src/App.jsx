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
    <div className="h-[100vh] font-satoshi md:snap-y md:snap-mandatory md:overflow-auto scroll-smooth">
      <Hero />
      <div>
        <WhatWeDo />
        <WhoWeAre />
        <WhatWeSell />
        <About />
        <About2 />
        <About3 />
        <InstallationService />
        <PlansCard />
        <FAQSection />
        <ParticlesBackground />
      </div>
    </div>
  );
};

export default App;
