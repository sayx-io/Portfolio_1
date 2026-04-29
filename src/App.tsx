/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import FeaturedProjects from './components/FeaturedProjects';
import PortfolioGrid from './components/PortfolioGrid';
import Services, { Footer } from './components/Services';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="micro-caps !text-white !opacity-100 text-xl mb-12"
      >
        SAYAN_DESIGNS<span className="text-blue-500 text-reveal inline-block" style={{ backgroundPositionX: '0%' }}>_SEQUENCE</span>
      </motion.div>
      <div className="w-64 h-px bg-white/10 relative overflow-hidden">
        <motion.div
          animate={{ width: `${progress}%` }}
          className="absolute inset-y-0 left-0 bg-blue-500"
        />
      </div>
      <div className="mt-4 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
        STORYTELLING_ENGINE // {progress.toString().padStart(3, '0')}%
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Disable scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="relative antialiased selection:bg-blue-500/30">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <div className="atmosphere" />
          <div className="grid-overlay" />
          <div className="grain-overlay" />
          <CustomCursor />
          <Navbar />
          
          <main>
            <Hero />
            <Story />
            <FeaturedProjects />
            <PortfolioGrid />
            <Services />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

