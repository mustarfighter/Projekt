"use client"
import Head from 'next/head';
import MovieSearch from './components/MovieSearch';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
  const handleCanvas2Click = () => {
    // Create a Blob with the desired text content
    const textContent = 'Hello, this is the content of the downloaded file!';
    const blob = new Blob([textContent], { type: 'text/plain' });

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'download.txt';

    // Append the anchor to the document and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Remove the anchor from the document
    document.body.removeChild(a);
  };

  useEffect(() => {
    // Code to draw on the first canvas
    const canvas1 = document.getElementById('myCanvas1') as HTMLCanvasElement;
    const context1 = canvas1.getContext('2d');

    if (context1) {
      context1.fillStyle = 'blue';
      context1.fillRect(50, 50, 1000, 1000);
      context1.fillStyle = 'black';
      context1.fillRect(75, 75, 100, 100);
      context1.fillStyle = 'blue';
      context1.fillRect(100, 100, 50, 50);
      context1.fillStyle = 'black';
      context1.fillRect(112.5, 112.5, 25, 25);
    }

    const canvas2 = document.getElementById('myCanvas2') as HTMLCanvasElement;
    const context2 = canvas2.getContext('2d');

    if (context2) {
      context2.fillStyle = 'blue';
      context2.fillRect(50, 50, 1000, 1000);
      context2.fillStyle = 'black';
      context2.fillRect(75, 75, 100, 100);
      context2.fillStyle = 'blue';
      context2.fillRect(100, 100, 50, 50);
      context2.fillStyle = 'black';
      context2.fillRect(112.5, 112.5, 25, 25);
    }

    canvas1.addEventListener('click', () => {
      window.location.href = 'https://tengr.ai';
    });

    canvas2.addEventListener('click', handleCanvas2Click);

    return () => {
      canvas1.removeEventListener('click', () => {
        window.location.href = 'https://tengr.ai';
      });
      canvas2.removeEventListener('click', handleCanvas2Click);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="Movie Database for users" />
      </Head>

      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center relative">
        <h1 className="text-7xl text-blue-500 font-bold mb-8">
          Movie Database
        </h1>
        <MovieSearch />

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
          style={{ position: 'absolute', top: '0', right: '3%' }}
        ></canvas>
      </main>
    </div>
  );
};

export default Home;