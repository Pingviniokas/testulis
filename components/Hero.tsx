"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import TabsContainer from './TabsContainer';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const Hero = () => {
  const [activeTab, setActiveTab] = useState('moving');
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Text animation
    const textTl = gsap.timeline({ repeat: -1 });
    const texts = ["Profesionalios Transporto Paslaugos", "Krovinių pervežimas", "Fiskaro nuoma"];

    texts.forEach((text, index) => {
      textTl.to(textRef.current, { duration: 2, text: text, ease: "none" })
        .to(textRef.current, { duration: 1, text: text, ease: "none" }, "+=1");
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      textTl.kill();
    };
  }, []);

  const cardOpacity = Math.min(scrollPosition / 500, 1);
  const cardTransform = `translateY(${Math.max(150 - scrollPosition / 2, 0)}px) scale(${0.8 + 0.2 * cardOpacity})`;

  return (
    <div className="h-[200vh]"> {/* Wrapper to allow scrolling */}
      <section ref={heroRef} className="sticky top-0 font-sora h-screen flex flex-col items-center justify-start pt-40 overflow-hidden">
        {/* Background videos */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div
            className={`absolute inset-0 bg-[#000] z-10 transition-opacity duration-1000 ease-in-out ${
              activeTab === 'moving' ? 'opacity-50' : 'opacity-40'
            }`}
          />

          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform rounded-[16px] ${
              activeTab === 'moving'
                ? 'scale-100 opacity-100'
                : 'scale-105 opacity-0'
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover transition-transform duration-1000 ease-out"
            >
              <source src="/videos/mov.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              activeTab === 'disposal'
                ? 'scale-100 opacity-100'
                : 'scale-105 opacity-0'
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover transition-transform duration-1000 ease-out"
            >
              <source src="/videos/disposal.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              activeTab === 'crane'
                ? 'scale-100 opacity-100'
                : 'scale-105 opacity-0'
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover transition-transform duration-1000 ease-out"
            >
              <source src="/videos/crane.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-24">
            <h1 ref={textRef} className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white transition-colors duration-500 min-h-[3em]">
            </h1>
          </div>

          <div
            ref={cardRef}
            className="w-full max-w-4xl relative"
            style={{ 
              opacity: cardOpacity,
              transform: cardTransform,
              transition: 'opacity 0.3s, transform 0.3s'
            }}
          >
            <div className="absolute inset-0 neon-border"></div>
            <div className="bg-black/30 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden relative z-10">
              <div className="p-6 sm:p-8">
                <TabsContainer onTabChange={setActiveTab} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="mb-2">Scroll to reveal</p>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
