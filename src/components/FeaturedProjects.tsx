import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "ABOUT SAYAN",
    category: "Lead Designer / Visionary",
    image: "https://i.ibb.co/GfqHxQxh/Whats-App-Image-2026-04-29-at-10-51-33-PM.jpg",
    description: "Graphic designer blending modern aesthetics with thoughtful visual storytelling.",
    details: "I am a passionate graphic designer dedicated to helping brands stand out through unique and memorable designs. With a background in varied visual disciplines, I focus on creating a lasting impression for every brand I work with. I am the Vice President: Student Council, LinkedIn Campus Ambassador, Member of Alumni Coordination Team Invertis University, Host & Designer: [TEDx S3,S4] [Invertia 25,26] [Convocation 25,26]",
    subdivisions: ["Creative Strategy", "Visual Identity", "Brand Storytelling"]
  },
  {
    id: 2,
    title: "DESIGNING",
    category: "Graphic Design / Visuals",
    image: "https://i.ibb.co/vCDLzGSq/Whats-App-Image-2026-04-29-at-11-09-22-PM.jpg",
    description: "A collection of impactful flex designs and high-scale event branding.",
    details: "Specializing in large-scale visual installations and event branding, I create designs that captivate and communicate effectively. Every project is a blend of precision and creative flair, ensuring the message resonates with the audience.",
    subdivisions: ["Event Branding", "Large Scale Prints", "Collateral Design"]
  },
  {
    id: 3,
    title: "EXPERIENCE",
    category: "Professional Journey / Milestones",
    image: "https://i.ibb.co/RG7KfZKn/Whats-App-Image-2026-04-29-at-11-09-03-PM.jpg",
    description: "A track record of leadership and creative execution across multiple high-profile projects.",
    details: "Bringing years of dedicated experience in graphic design and student leadership at Invertis University. From hosting TEDx events to designing large-scale festival branding, my journey is defined by a commitment to excellence and a passion for impactful visual communication.",
    subdivisions: ["Leadership", "Event Hosting", "Design Execution"]
  }
];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
  subdivisions: string[];
}

interface ProjectItemProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, onClick }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="h-screen w-full flex items-center justify-center relative overflow-hidden px-8">
      <motion.div 
        style={{ y, opacity }}
        className="z-10 text-center max-w-4xl glass-panel p-12 md:p-20 accent-glow cursor-pointer group"
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <span className="micro-caps mb-4 block">Archive Sequence {index + 1}</span>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 font-light max-w-md mx-auto mb-10 text-lg leading-relaxed">{project.description}</p>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="w-12 h-px bg-white/20" />
            <span className="micro-caps text-blue-400">{project.category}</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
          <motion.div 
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 group-hover:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span>Open Subdivision</span>
            <ArrowRight className="w-3 h-3 translate-y-[-1px] group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]) }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>
    </div>
  );
};

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="héritage" className="bg-black relative">
      {projects.map((p, i) => (
        <ProjectItem 
          key={p.id} 
          project={p} 
          index={i} 
          onClick={() => setSelectedProject(p)}
        />
      ))}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8 overflow-y-auto"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 z-[110] w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 py-20">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-12"
              >
                <div>
                  <span className="micro-caps text-blue-500 mb-4 block">Project Detail</span>
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none">{selectedProject.title}</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-gray-400 font-light leading-relaxed">
                    {selectedProject.details}
                  </p>
                  
                  <div className="pt-8 grid grid-cols-1 gap-8">
                    <div className="space-y-4">
                      <span className="micro-caps">Subdivisions</span>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.subdivisions.map(sub => (
                          <span key={sub} className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-tighter hover:bg-white hover:text-black transition-colors cursor-default">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="micro-caps block mb-1">Category</span>
                    <span className="text-sm font-bold text-blue-400">{selectedProject.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="micro-caps block mb-1">Timeline</span>
                    <span className="text-sm font-bold">2026 Archive</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative aspect-[4/5] md:aspect-auto overflow-hidden group"
              >
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
