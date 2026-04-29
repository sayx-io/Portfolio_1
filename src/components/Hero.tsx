import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="z-10 text-center px-4 relative">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[5.5rem] font-bold leading-[0.9] tracking-[-0.04em] uppercase"
        >
          CREATING <br />
          <span className="text-outline">VISUAL</span><br />
          <span className="text-reveal inline-block" style={{ backgroundPositionX: '0%' }}>EXPERIENCES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 max-w-md mx-auto text-lg text-gray-400 font-light leading-relaxed mb-10"
        >
          Turning ideas into visuals that speak. As a graphic designer, I blend creativity, emotion, and design to craft unique experiences that connect, inspire, and stand out
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a
            href="#héritage"
            className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-colors"
          >
            Explore Work
          </a>
          
          <div className="flex items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800"></div>
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-700"></div>
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-600"></div>
            </div>
            <span className="ml-4 micro-caps"> TRUSTED BY 100+ CUSTOMERS</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
