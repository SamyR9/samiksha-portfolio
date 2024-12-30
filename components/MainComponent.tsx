import React from 'react'
import Banner from './Banner'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const MainComponent = () => {

  const [ init, setInit ] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
        await loadFull(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

  return (
    <>
    {
      init && <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                  enable: true,
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
    }

    <div className='w-full h-screen bg-bodyColor bg-no-repeat bg-center bg-cover'>
      <div className="w-full h-[88vh] gap-20 px-16">
            <Banner />
            <About />
            <Experience />
            <Projects />
      </div>
    </div>
    </>
  )
}

export default MainComponent