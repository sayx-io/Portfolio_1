import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference"
    >
      <div className="flex items-center space-x-4 font-display font-bold">
        <div className="w-10 h-10 border border-white flex items-center justify-center text-sm">SD</div>
        <span className="micro-caps">SAYAN DESIGNS</span>
      </div>

      <div className="hidden md:flex space-x-12">
        {[
          { label: 'Works', id: 'créations' },
          { label: 'Experience', id: 'expérience' },
          { label: 'Projects', id: 'héritage' },
          { label: 'Contact', id: 'contact' }
        ].map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            className="micro-caps hover:text-blue-400 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
        >
          {[
            { label: 'Works', id: 'créations' },
            { label: 'Experience', id: 'expérience' },
            { label: 'Projects', id: 'héritage' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display font-bold uppercase tracking-tighter hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
