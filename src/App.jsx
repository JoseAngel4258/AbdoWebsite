import "./App.css";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import About from "./components/About";

import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import InstallationService from "./components/InstallationService";
import ParticlesBackground from "./components/ParticlesBackground";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeSell from "./components/WhatWeSell";
import WhoWeAre from "./components/WhoWeAre";
import Navbar from "./components/Navbar.jsx";
import Video from "./components/Video";
import PlansCardHeizahn from "./components/PlansCardHeaizahn";

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
    <Provider store={store}>
      <div className="h-[100vh] md:snap-y md:snap-mandatory md:overflow-auto fondoBg scroll-smooth font-inter">
        <Navbar />
        <Hero />
        <About
          imageSrc="ruta-de-la-imagen-1.jpg"
          title="Nuestros Inicios"
          description="En nuestros inicios, comenzamos como una pequeña empresa local que se dedicaba a proporcionar servicios de Internet de alta velocidad a comunidades locales. Nuestra misión siempre ha sido ofrecer conexiones de fibra óptica confiables y rápidas."
        />

        {/* Sección 2: Quiénes Somos */}
        <About
          imageSrc="ruta-de-la-imagen-2.jpg"
          title="Quiénes Somos"
          description="Somos un equipo apasionado de expertos en fibra óptica que se esfuerza por brindar a nuestros clientes las mejores soluciones de conectividad. Con años de experiencia en la industria, estamos comprometidos en proporcionar un servicio de alta calidad y atención personalizada."
        />

        {/* Sección 3: A Dónde Vamos */}
        <About
          imageSrc="ruta-de-la-imagen-3.jpg"
          title="A Dónde Vamos"
          description="Nuestro objetivo es expandir nuestra red de fibra óptica y llegar a más comunidades para proporcionar acceso a Internet de alta velocidad a todos. Estamos comprometidos en seguir innovando y mejorando nuestros servicios para satisfacer las necesidades de nuestros clientes en constante evolución."
        />
        <Video />
        <InstallationService />
        <PlansCardHeizahn />

        {/*
      <FAQSection />
      <ParticlesBackground />*/}
      </div>
    </Provider>
  );
};

export default App;
