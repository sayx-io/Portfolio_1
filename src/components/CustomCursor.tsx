import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-500 rounded-full pointer-events-none z-[9999]"
        style={{ 
          x: useSpring(mouseX, { damping: 40, stiffness: 400 }), 
          y: useSpring(mouseY, { damping: 40, stiffness: 400 }),
          translateX: 13,
          translateY: 13
        }}
      />
    </>
  );
}
