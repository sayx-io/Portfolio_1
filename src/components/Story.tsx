import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="expérience" className="py-32 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-12 md:space-y-0">
      <div className="w-full md:w-1/2 space-y-8" ref={ref}>
        <motion.div
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight">
            Crafting Visual Impact <br />
            <span className="text-outline italic">Design & Perception</span>
          </h2>
        </motion.div>

        <motion.div
           animate={isInView ? { y: 0, opacity: 0.7 } : { y: 20, opacity: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-lg md:text-xl font-light leading-relaxed max-w-md text-gray-400"
        >
          At Sayan Designs, I believe design is not just what you see, but what you feel. As a graphic designer, I blend modern aesthetics with thoughtful visual storytelling to create designs that truly connect.
        </motion.div>

        <motion.div
           animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex space-x-12 pt-8"
        >
          <div>
            <div className="text-3xl font-bold">5000+</div>
            <div className="micro-caps">DESIGNS CREATED</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="micro-caps">PROJECTS DONE</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4yrs</div>
            <div className="micro-caps">Experience</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0.8, opacity: 0, rotate: 5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-5/12 aspect-[4/5] relative overflow-hidden ring-1 ring-white/10"
      >
        <img 
           src="https://i.ibb.co/r20Q3QmZ/Whats-App-Image-2026-04-29-at-11-32-54-PM.jpg" 
           alt="Sayan Designs Experience" 
           className="object-cover w-full h-full ring-1 ring-white/10"
           referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
