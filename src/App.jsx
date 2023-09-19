import "./App.css";
import { Provider } from "react-redux";
import store from "./components/store";
import About from "./components/About";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import InstallationService from "./components/InstallationService";
import Navbar from "./components/Navbar.jsx";
import Video from "./components/Video";
import PlansCardHeizahn from "./components/PlansCardHeaizahn";
import Tutorials from "./components/Tutorials"; // Importa el nuevo componente de tutoriales
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from "./components/not-found/not-fount";





const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="h-[100vh] md:snap-y md:snap-mandatory md:overflow-auto scroll-smooth font-inter bg-gradient-to-t from-slate-800 to-slate-900">
          <Routes>
            <Route path="/" exact element={<>
              <Navbar />
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About
                  imageSrc="/img/inicios.jpg"
                  title="Nuestros Inicios"
                  description="En nuestros inicios, comenzamos como una pequeña empresa local que se dedicaba a proporcionar servicios de Internet de alta velocidad a comunidades locales. Nuestra misión siempre ha sido ofrecer conexiones de fibra óptica confiables y rápidas."
                />
                <About
                  imageSrc="/img/fibra.jpg"
                  description="Somos un equipo apasionado de expertos en fibra óptica que se esfuerza por brindar a nuestros clientes las mejores soluciones de conectividad. Con años de experiencia en la industria, estamos comprometidos en proporcionar un servicio de alta calidad y atención personalizada."
                  title="Quiénes Somos"
                />
                <About
                  imageSrc="/img/futuro.jpg"
                  title="A Dónde Vamos"
                  description="Nuestro objetivo es expandir nuestra red de fibra óptica y llegar a más comunidades para proporcionar acceso a Internet de alta velocidad a todos. Estamos comprometidos en seguir innovando y mejorando nuestros servicios para satisfacer las necesidades de nuestros clientes en constante evolución."
                />
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
            </>} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
