import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

// Fallback 3D-like component when Spline scene is not available
export function BakeryScene() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use motion values for smoother animations
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateZ = useMotionValue(0);
  
  // Add spring physics for smooth rolling motion - slower and more controlled
  const springConfig = { damping: 25, stiffness: 100 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springRotateZ = useSpring(rotateZ, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Calculate rotation based on cursor position - creates rolling effect
    const maxRotation = 60; // Doubled for more dramatic rolling
    const rotY = (deltaX / rect.width) * maxRotation * 3; // Increased multiplier
    const rotX = -(deltaY / rect.height) * maxRotation * 3; // Increased multiplier
    const rotZ = (deltaX / rect.width) * 35; // Increased z-axis rotation for more roll
    
    rotateX.set(rotX);
    rotateY.set(rotY);
    rotateZ.set(rotZ);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    rotateZ.set(0);
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Animated Croissant Illustration */}
      <motion.div
        animate={{
          y: isHovered ? -30 : [0, -20, 0],
          scale: isHovered ? 1.15 : 1,
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: springRotateZ,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        transition={{
          duration: isHovered ? 0.3 : 6,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Main croissant body */}
        <div className="relative w-80 h-52 md:w-96 md:h-64">
          {/* Croissant shape using gradients */}
          <motion.div
            animate={{
              boxShadow: isHovered 
                ? "0 30px 70px -20px hsl(25 50% 30% / 0.6), inset 0 -10px 40px hsl(25 60% 35% / 0.4)"
                : "0 20px 50px -20px hsl(25 50% 30% / 0.4), inset 0 -10px 30px hsl(25 60% 35% / 0.3)",
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-[50%] transform rotate-[-15deg]"
            style={{
              background: isHovered 
                ? "linear-gradient(135deg, hsl(35 85% 70%) 0%, hsl(30 80% 55%) 50%, hsl(25 75% 45%) 100%)"
                : "linear-gradient(135deg, hsl(35 75% 65%) 0%, hsl(30 70% 50%) 50%, hsl(25 65% 40%) 100%)",
            }}
          />
          {/* Layers */}
          <div
            className="absolute top-[20%] left-[10%] w-[80%] h-[15%] rounded-full opacity-40"
            style={{
              background: "linear-gradient(90deg, transparent 0%, hsl(35 80% 75%) 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-[40%] left-[15%] w-[70%] h-[12%] rounded-full opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent 0%, hsl(35 80% 75%) 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-[55%] left-[20%] w-[60%] h-[10%] rounded-full opacity-25"
            style={{
              background: "linear-gradient(90deg, transparent 0%, hsl(35 80% 75%) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Floating particles */}
        <motion.div
          animate={{ 
            y: isHovered ? [-20, -30, -20] : [-10, 10, -10], 
            opacity: isHovered ? [0.8, 1, 0.8] : [0.5, 1, 0.5],
            scale: isHovered ? [1.2, 1.5, 1.2] : 1
          }}
          transition={{ duration: isHovered ? 1.5 : 3, repeat: Infinity, delay: 0 }}
          className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-accent/40"
        />
        <motion.div
          animate={{ 
            y: isHovered ? [15, 5, 15] : [10, -10, 10], 
            opacity: isHovered ? [0.6, 1, 0.6] : [0.3, 0.8, 0.3],
            scale: isHovered ? [1.5, 2, 1.5] : 1
          }}
          transition={{ duration: isHovered ? 2 : 4, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 -left-6 w-2 h-2 rounded-full bg-caramel/30"
        />
        <motion.div
          animate={{ 
            y: isHovered ? [0, 25, 0] : [-5, 15, -5], 
            opacity: isHovered ? [0.7, 1, 0.7] : [0.4, 0.9, 0.4],
            scale: isHovered ? [1.3, 1.8, 1.3] : 1
          }}
          transition={{ duration: isHovered ? 2.5 : 3.5, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-2 right-1/4 w-4 h-4 rounded-full bg-accent/20"
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovered 
            ? "radial-gradient(circle at center, hsl(35 80% 55% / 0.3) 0%, transparent 60%)"
            : "radial-gradient(circle at center, hsl(35 80% 55% / 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Interaction hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0.8,
          y: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ delay: 2, duration: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow"
      >
        {isHovered ? "✨ Freshly baked daily ✨" : "Freshly baked daily"}
      </motion.p>
    </div>
  );
}
