import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Plus } from 'lucide-react';

const archive = [
  { 
    id: 1, 
    title: "TEDx SEASON 4", 
    category: "FLEX DESIGNS", 
    img: "https://i.ibb.co/B5X743zK/CSED-WALL.png",
    subDivisions: [
      { id: '1a', title: 'CSED WALL', img: 'https://i.ibb.co/B5X743zK/CSED-WALL.png'},
      { id: '1b', title: 'MAIN GATE', img: 'https://i.ibb.co/gbNwM1p6/1.png'},
      { id: '1c', title: 'AUDI TICKET', img: 'https://i.ibb.co/nMjBnXHV/AUDI-TICKET.png'},
      { id: '1d', title: 'MERCHANDISE', img: 'https://i.ibb.co/9HPd3156/3.png'}
    ]
  },
  { 
    id: 2, 
    title: "TEDx SEASON 3", 
    category: "FLEX DESIGNS", 
    img: "https://i.ibb.co/ZzX7g8yw/CSED-WALL-FINAL.jpg",
    subDivisions: [
      { id: '2a', title: 'AUDI TOP', img: 'https://i.ibb.co/W4t3Mtt8/AUDI-TOP-FLEX-Pdf-7993-X-1271-Px-1.png'},
      { id: '2b', title: 'AUDI SIDES', img: 'https://i.ibb.co/pj1Fv9hb/AUDI-SIDE-FLEX-1.jpg'},
      { id: '2c', title: 'INAUGURAL', img: 'https://i.ibb.co/xSjn6PRj/inuagural-banner-final-11jan-1.jpg'},
      { id: '2d', title: 'LOGO', img: 'https://i.ibb.co/dsBWc44k/ARCADIA-5.png'}
    ]
  },
  { 
    id: 3, 
    title: "11TH CONVOCATION", 
    category: "FLEX DESIGNS", 
    img: "https://i.ibb.co/RpchcGg7/CONV-CSED-WALL-1-2.jpg",
    subDivisions: [
      { id: '3a', title: 'CSED WALL', img: 'https://i.ibb.co/RpchcGg7/CONV-CSED-WALL-1-2.jpg'},
      { id: '3b', title: 'SIDE PANELS', img: 'https://i.ibb.co/8LPtQ1vX/AUDI-SIDE-FLEX-CONV-2250-X-7200-Px-1.jpg'},
      { id: '3c', title: 'AUDI BACKDROP', img: 'https://i.ibb.co/prB1vpZs/CONV-BACKDROP-1.jpg'},
      { id: '3d', title: 'BRAND WALL', img: 'https://i.ibb.co/3mfvjqj9/BRAND-WALL-1-1.jpg'}
    ]
  },
  { 
    id: 4, 
    title: "PLACEMENT DAY", 
    category: "FLEX DESIGNS", 
    img: "https://i.ibb.co/rKJRHXYr/AUDI-BACKDROP.png",
    subDivisions: [
      { id: '4a', title: 'LAWN GATE', img: 'https://i.ibb.co/yndFxjkB/LAWN-GATE-SUNBOARD.png'},
      { id: '4b', title: 'AUDI MAIN GATE', img: 'https://i.ibb.co/Q764ChZb/AUDI-MAIN-GATE-TOP.png'},
      { id: '4c', title: 'AUDI BACKDROP', idId: '4c', img: 'https://i.ibb.co/rKJRHXYr/AUDI-BACKDROP.png'},
      { id: '4d', title: 'BRAND WALL', img: 'https://i.ibb.co/s7wtbMS/BRAND-WALL.png'}
    ]
  },
  { 
    id: 5, 
    title: "INVERTIA 2026", 
    category: "FLEX DESIGNS", 
    img: "https://i.ibb.co/cXcxnwFT/CSED-WALL.png",
    subDivisions: [
      { id: '5a', title: 'CSED WALL', img: 'https://i.ibb.co/cXcxnwFT/CSED-WALL.png'},
      { id: '5b', title: 'MERCHANDISE', img: 'https://i.ibb.co/3mFMB4pb/Chat-GPT-Image-Feb-7-2026-01-42-47-PM.png'},
      { id: '5c', title: 'MAIN GATE', img: 'https://i.ibb.co/Gzp2xHW/MAIN-GATE.png'},
      { id: '5d', title: 'CREATIVE', img: 'https://i.ibb.co/vCPLbWST/CREATIVE-INVERTIA.png'}
    ]
  },
  { 
    id: 6, 
    title: "INVERTIA 2025", 
    category: "FLEX DESIGNS", 
    img: "https://i.ibb.co/1fS5bGQW/Copy-of-INVERTIA-2025-2600-x-3120-px.png",
    subDivisions: [
      { id: '6a', title: 'CSED WALL', img: 'https://i.ibb.co/1fS5bGQW/Copy-of-INVERTIA-2025-2600-x-3120-px.png'},
      { id: '6b', title: 'AUDI BACKDROP', img: 'https://i.ibb.co/4gMFP9HB/AUDI-BACKDROP-4500-x-2000-px.png'},
      { id: '6c', title: 'PODIUM', img: 'https://i.ibb.co/7dkCrbks/AUDI-PODIUM.png'},
      { id: '6d', title: 'TROPHY STICKER', img: 'https://i.ibb.co/d0g8fCv7/ABHIRUCHI-CORDINATOR-TROPHY-11-x-13-cm.png'}
    ]
  },
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof archive[0] | null>(null);
  const [selectedSubDivision, setSelectedSubDivision] = useState<typeof archive[0]['subDivisions'][0] | null>(null);
  const categories = ['All', 'Branding', 'Poster', 'UI/UX', 'Motion'];

  const filteredItems = archive.filter(item => filter === 'All' || item.category === filter);

  return (
    <section id="créations" className="py-32 px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-8 md:space-y-0">
        <h2 className="text-4xl font-bold uppercase tracking-tighter">The Archive</h2>
        
        <div className="flex space-x-6">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`micro-caps ${filter === cat ? 'text-blue-400' : 'text-gray-500'} hover:text-white transition-colors cursor-pointer`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={item.id}
            onClick={() => setSelectedProject(item)}
            className="group relative aspect-[4/5] overflow-hidden glass-panel accent-glow cursor-pointer"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <span className="micro-caps text-blue-400 mb-2">{item.category}</span>
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-bold uppercase tracking-tighter">{item.title}</h4>
                <Plus className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="min-h-screen w-full p-8 md:p-20 relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-24 right-12 z-[110] w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/10 transition-colors bg-black/50 backdrop-blur-md"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-w-7xl mx-auto space-y-24 py-20">
                <div className="text-center md:text-left space-y-4">
                  <span className="micro-caps text-blue-500">Archive Sequence // Sub-division</span>
                  <h2 className="text-7xl md:text-[10rem] font-bold tracking-tighter uppercase leading-none opacity-20 absolute -top-10 left-0 right-0 pointer-events-none select-none">
                    {selectedProject.title}
                  </h2>
                  <h3 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase relative z-10">{selectedProject.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
                  {selectedProject.subDivisions.map((sub, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.2 }}
                      key={sub.id}
                      onClick={() => setSelectedSubDivision(sub)}
                      className="group flex flex-col glass-panel overflow-hidden border border-white/5 h-full cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                    >
                      <div className="aspect-square overflow-hidden active:scale-95 transition-transform duration-300 border-b border-white/5">
                        <motion.img 
                          layoutId={`img-container-${sub.id}`}
                          src={sub.img} 
                          alt={sub.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 space-y-4 flex-grow bg-white/5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">Sec_Fragment_{i+1}</span>
                          <div className="flex items-center space-x-2">
                             <span className="text-[8px] text-white/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Full Scale</span>
                             <div className="w-6 h-px bg-blue-500/30" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xl font-bold uppercase tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                            {sub.title}
                          </h4>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                            {sub.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="w-full h-px bg-white/5" />

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 micro-caps space-y-4 md:space-y-0">
                  <span>Category: {selectedProject.category}</span>
                  <span>Project ID: ARCH-{selectedProject.id}X</span>
                  <span>Status: Fragmented Archive Found</span>
                </div>
              </div>
            </div>

            {/* Sub-division Original View Overlay */}
            <AnimatePresence>
              {selectedSubDivision && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedSubDivision(null)}
                  className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-24 cursor-zoom-out"
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSubDivision(null);
                    }}
                    className="fixed top-32 right-16 z-[130] w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/20 transition-colors bg-black/50"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="max-w-5xl w-full max-h-[80vh] relative flex flex-col items-center gap-8 outline-none" onClick={(e) => e.stopPropagation()}>
                    <motion.div
                      layoutId={`img-container-${selectedSubDivision.id}`}
                      className="w-full flex items-center justify-center"
                    >
                      <img 
                        src={selectedSubDivision.img} 
                        alt={selectedSubDivision.title}
                        className="max-w-full max-h-[55vh] object-contain shadow-[0_0_100px_rgba(59,130,246,0.15)] ring-1 ring-white/20 rounded-sm"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-center space-y-3"
                    >
                       <div className="space-y-1">
                          <h4 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">{selectedSubDivision.title}</h4>
                          <p className="micro-caps text-blue-500 tracking-[0.2em] text-[10px]">Fragment View // Original Format</p>
                       </div>
                       <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto" />
                       <p className="text-gray-400 uppercase text-[9px] tracking-widest max-w-sm mx-auto leading-relaxed">{selectedSubDivision.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
