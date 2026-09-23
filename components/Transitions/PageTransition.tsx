"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTransition } from "./TransitionContext";
import { doorVariants, SLASH, EASING } from "@/utils/motion";
import { useEffect, useState } from "react";

/**
 * The persistent page-transition overlay
 * Mounted once in the root layout — it never unmounts, only changes phase
 */
export function PageTransition() {
  const { phase, label, onPanelsClosed, onPanelsOpened } = useTransition();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Desktop is slower and smoother than mobile
  const closeDuration = isDesktop ? 0.6 : 0.5;
  const openDuration = isDesktop ? 0.8 : 0.6;

  const target =
    phase === "idle" 
      ? "offscreen" 
      : phase === "loading" 
        ? "duality"  // KEY: Shows duality animation during loading!
        : phase === "opening" 
          ? "offscreen" 
          : "closed";

  const handleComplete = (definition: string) => {
    if (definition === "closed" && phase === "closing") {
      onPanelsClosed();
    }
    if (definition === "offscreen" && phase === "opening") {
      onPanelsOpened();
    }
  };

  return (
    <div
      aria-hidden={phase === "idle"}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ pointerEvents: phase === "idle" ? "none" : "all" }}
    >
      {/* Green panel — enters from the top-left with diagonal slash */}
      <motion.div
        className="absolute inset-0 bg-primary"
        style={{ clipPath: SLASH.leftHalf }}
        variants={doorVariants(1, closeDuration, openDuration)}
        initial="offscreen"
        animate={target}
        onAnimationComplete={handleComplete}
      />
      
      {/* Orange panel — enters from the bottom-right with diagonal slash */}
      <motion.div
        className="absolute inset-0 bg-accent"
        style={{ clipPath: SLASH.rightHalf }}
        variants={doorVariants(-1, closeDuration, openDuration)}
        initial="offscreen"
        animate={target}
      />
    </div>
  );
}
