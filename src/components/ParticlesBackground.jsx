import React from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 to-gray-200 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullscreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "attract",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 90,
              },
              attract: {
                distance: 200,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#111",
            },
            links: {
              color: "#787878",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
              bounce: {
                vertical: { value: 0.5 },
              },
            },
            move: {
              acceleration: 0,
              directions: "none",
              enable: true,
              random: true,
              speed: 2,
              straight: false,
              outModes: {
                top: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;