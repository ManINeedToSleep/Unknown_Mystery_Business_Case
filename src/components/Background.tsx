"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * FloatingPetal Component
 * 
 * Renders a single animated cherry blossom petal with deterministic movement
 * based on its index.
 * 
 * @param {Object} props
 * @param {number} props.index - Unique index for the petal
 * @param {number} props.total - Total number of petals
 */
const FloatingPetal = ({ index, total }: { index: number; total: number }) => {
  // Use memo to prevent recalculation of deterministic values
  const {
    size,
    xSpeed,
    ySpeed,
    path,
  } = useMemo(() => {
    // Calculate deterministic values based on index to prevent hydration errors
    const baseSize = 32 - (index / total) * 24;
    const baseXSpeed = 15 + Math.cos(index) * 5;
    const baseYSpeed = 12 + Math.sin(index) * 4;
    
    // Generate deterministic animation paths
    const pathPoints = {
      x: [
        0,
        -20 - (index % 20),
        -50 - ((index * 7) % 20),
        -100 - (index % 30)
      ].map(x => `${x}vw`),
      y: [
        0,
        20 + ((index * 3) % 20),
        50 + ((index * 5) % 30),
        100 + (index % 20)
      ].map(y => `${y}vh`),
      rotate: [
        (index * 30) % 360,
        ((index * 30) + 120) % 360,
        ((index * 30) + 240) % 360
      ],
    };

    return {
      size: baseSize,
      xSpeed: baseXSpeed,
      ySpeed: baseYSpeed,
      path: pathPoints,
    };
  }, [index, total]); // Dependencies ensure consistent values

  return (
    <motion.div
      className="absolute"
      style={{ 
        top: `${5 + (index * 7)}%`,
        right: `${(index * 13) % 30}%`, // Deterministic position
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: "url('/sakura-petal-clipart-md.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      animate={{
        x: path.x,
        y: path.y,
        opacity: [0, 1, 1, 1, 0],
        rotate: path.rotate,
      }}
      transition={{
        duration: ySpeed,
        repeat: Infinity,
        delay: index * 2,
        ease: "linear",
        x: { duration: xSpeed, ease: "linear" },
        y: { duration: ySpeed, ease: "linear" },
        opacity: { duration: ySpeed, times: [0, 0.1, 0.3, 0.8, 1] },
        rotate: { duration: ySpeed * 0.8, ease: "linear" },
      }}
    />
  );
};

export const Background = () => {
  const totalPetals = 12;

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#FFB6C1] via-[#FFDAC1] to-[#87CEEB] -z-20">
      {/* Sun */}
      <motion.div
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: [0.8, 1, 0.9], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[50%] w-32 h-32 bg-white rounded-full shadow-xl"
        style={{
          filter: "blur(20px)",
          transform: "translateX(-50%)",
        }}
      ></motion.div>

      {/* Floating Clouds */}
      <motion.div
        className="absolute top-10 left-[10%] w-40 h-20 bg-white rounded-full opacity-70"
        animate={{ x: ["0%", "30%", "0%"], opacity: [0.7, 0.8, 0.7] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(10px)" }}
      />
      <motion.div
        className="absolute top-[30%] left-[60%] w-32 h-16 bg-white rounded-full opacity-60"
        animate={{ x: ["0%", "-20%", "0%"], opacity: [0.6, 0.75, 0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(12px)" }}
      />
      <motion.div
        className="absolute top-[15%] left-[30%] w-48 h-24 bg-white rounded-full opacity-50"
        animate={{ x: ["0%", "25%", "0%"], opacity: [0.5, 0.6, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(15px)" }}
      />
      <motion.div
        className="absolute top-[40%] left-[20%] w-36 h-18 bg-white rounded-full opacity-65"
        animate={{ x: ["0%", "15%", "0%"], opacity: [0.65, 0.75, 0.65] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(8px)" }}
      />
      <motion.div
        className="absolute top-[25%] left-[80%] w-44 h-22 bg-white rounded-full opacity-55"
        animate={{ x: ["0%", "-25%", "0%"], opacity: [0.55, 0.65, 0.55] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(13px)" }}
      />

      {/* Floating Petals */}
      {[...Array(totalPetals)].map((_, i) => (
        <FloatingPetal 
          key={i} 
          index={i}
          total={totalPetals}
        />
      ))}

      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#556B8D] to-transparent"></div>
      <div className="absolute bottom-0 left-10 w-[60%] h-[25%] bg-gradient-to-t from-[#6B8EAD] to-transparent rounded-t-full"></div>

      {/* Cherry Blossom Branch */}
      <div className="absolute top-0 right-0 w-1/2 h-96 opacity-80 bg-[url('/Sakura_Blossom.png')] bg-contain bg-no-repeat"></div>
    </div>
  );
}; 