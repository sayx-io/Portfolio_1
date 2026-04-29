import { motion } from 'motion/react';
import { Layers, Monitor, Play, Zap, Instagram, Dribbble, Github } from 'lucide-react';

const services = [
  { icon: Layers, title: "Branding", desc: "Crafting distinct visual worlds from the ground up." },
  { icon: Monitor, title: "Digital Design", desc: "Immersive experiences across all digital surfaces." },
  { icon: Play, title: "Motion Graphics", desc: "Directing rhythm and time through visual flow." },
  { icon: Zap, title: "Creative Direction", desc: "Visionary leadership for complex creative challenges." },
];

export default function Services() {
  return (
    <section className="py-32 bg-black/40 backdrop-blur-sm border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-lg text-blue-500 glass-panel">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tighter">{s.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-16 px-8 relative overflow-hidden bg-[#050505] z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end space-y-12 md:space-y-0">
          <div className="flex space-x-16">
            <div className="space-y-6">
              <span className="micro-caps">Capabilities</span>
              <div className="flex flex-wrap gap-2">
                {['UI/UX', '3D Motion', 'Strategy', 'Branding'].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-tighter">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="micro-caps">Connect</span>
              <div className="flex space-x-6 text-xs font-bold">
                {[
                  { label: 'Instagram', url: 'https://www.instagram.com/sayx.io?igsh=MW8wYzd3bGRsZ2FxcA==/' },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sayan-biswas-577a1a276' },
                ].map(social => (
                  <a 
                    key={social.label} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="micro-caps block mb-2">BASED ON EXPERIENCE</span>
            <span className="text-xs text-gray-500 italic">Available for new projects Q3 2026</span>
          </div>
        </div>

        <div className="w-full h-px bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 border border-white flex items-center justify-center font-bold text-xs">SD</div>
            <span className="micro-caps">SAYAN DESIGNS</span>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
            © 2026 SAYAN DESIGNS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute -bottom-16 left-0 right-0 pointer-events-none opacity-[0.02] select-none text-[30vw] font-bold whitespace-nowrap text-center uppercase tracking-tighter leading-none">
        SAYAN DESIGNS
      </div>
    </footer>
  );
}
