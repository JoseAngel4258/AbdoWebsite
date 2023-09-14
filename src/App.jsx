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
import Navbar from "./components/Navbar.jsx";
import Video from "./components/Video";
<<<<<<< HEAD
import Section from "./components/Section";
=======
import PlansCardHeizahn from "./components/PlansCardHeaizahn";

>>>>>>> dc6a28af17bb3520e89fbf55d8330024b1fd629a

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




  return (
    <div className="h-[100vh] md:snap-y md:snap-mandatory md:overflow-auto fondoBg scroll-smooth font-inter">
      <Navbar />
      <Hero />
      <Video />
      <InstallationService />
      <PlansCardHeizahn />
      {/*<About />
        <About2 />
        <About3 />
        <WhatWeDo />
        <WhoWeAre />
        <WhatWeSell />
<<<<<<< HEAD
      <PlansCard />
=======
      
>>>>>>> dc6a28af17bb3520e89fbf55d8330024b1fd629a
      <FAQSection />
      <ParticlesBackground />*/}
    </div>
  );
};

export default App;
