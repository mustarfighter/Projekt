"use client"

import Head from 'next/head';
import MovieSearch from './components/MovieSearch';
import React, { useEffect } from 'react';
import particles_config from '../particlesjs-config.json';
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const Home: React.FC = () => {
  const handleSubmitButtonStyleChange = () => {
    const myDiv = document.getElementById(
      'myDiv'
    ) as HTMLButtonElement;

    let className = 'container mx-auto py-10 px-4 flex flex-col items-center justify-center relative transition-all ease-in-out duration-500';
    myDiv.className = className;
  };

  useEffect(() => {
    // Code to draw on the first canvas
    const canvas1 = document.getElementById('myCanvas1') as HTMLCanvasElement;
    const context1 = canvas1.getContext('2d');

    if (context1) {
      context1.fillStyle = '#1a6113';
      context1.fillRect(50, 50, 1000, 1000);
      context1.fillStyle = 'black';
      context1.fillRect(75, 75, 100, 100);
      context1.fillStyle = '#1a6113';
      context1.fillRect(100, 100, 50, 50);
      context1.fillStyle = 'black';
      context1.fillRect(112.5, 112.5, 25, 25);
    }

    const canvas2 = document.getElementById('myCanvas2') as HTMLCanvasElement;
    const context2 = canvas2.getContext('2d');

    if (context2) {
      context2.fillStyle = '#1a6113';
      context2.fillRect(50, 50, 1000, 1000);
      context2.fillStyle = 'black';
      context2.fillRect(75, 75, 100, 100);
      context2.fillStyle = '#1a6113';
      context2.fillRect(100, 100, 50, 50);
      context2.fillStyle = 'black';
      context2.fillRect(112.5, 112.5, 25, 25);
    }

    canvas1.addEventListener('click', () => {
      window.location.href = 'https://tengr.ai';
    });

    return () => {
      canvas1.removeEventListener('click', () => {
        window.location.href = 'https://tengr.ai';
      });
    };
  }, []);
  const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <div className="min-h-screen">
        <Particles id="tsparticles" options={{
                background: {
                    color: {
                        value: "#00000",
                    },
                },
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
                        resize: true,
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
                        value: "#1a6113",
                    },
                    links: {
                        color: "#1a6113",
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
            }} init={particlesInit} loaded={particlesLoaded} />
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="Movie Database for users" />
      </Head>

      <main id="myDiv" className="container mx-auto py-100 px-4 h-screen flex flex-col items-center content-ce justify-center relative">
        <h1 className="text-7xl text-white font-bold mb-8">
          Movie Database
        </h1>
        <MovieSearch handleSubmitButtonStyleChange={handleSubmitButtonStyleChange} />

        <canvas
          id="myCanvas1"
          width="200"
          height="200"
          style={{ position: 'absolute', top: '0', left: '0' }}
        ></canvas>

        <canvas
          id="myCanvas2"
          width="200"
          height="200"
          style={{ position: 'absolute', top: '0', right: '0' }}
        ></canvas>
      </main>
    </div>
  );
};

export default Home;