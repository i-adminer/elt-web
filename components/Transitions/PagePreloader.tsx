"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { doorVariants, SLASH } from "@/utils/motion";

/**
 * Initial page preloader - shows on first load or refresh
 * EasyLink wordmark is rendered on both diagonal panels at the same position,
 * so when they split apart, the text tears along the diagonal slash
 */
export function PagePreloader() {
  const [isRevealing, setIsRevealing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const MINIMUM_VISIBLE_MS = 2000;

  useEffect(() => {
    if (isDismissed) return;

    document.body.style.overflow = "hidden";
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const delay = Math.max(0, MINIMUM_VISIBLE_MS - elapsed);

      setTimeout(() => {
        setIsRevealing(true);
      }, delay);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    document.body.style.overflow = "";
  };

  if (isDismissed) return null;

  /**
   * EasyLink wordmark rendered inside each panel at the same position
   * When panels split diagonally, the text tears along the slash line
   */
  const EasyLinkWordmark = () => (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col items-center justify-center text-white"
    >
      <span className="type-door">EASYLINK</span>
    </div>
  );

  return (
    <div id="easylink-preloader" className="fixed inset-0 z-[60]">
      {/* Green panel - left diagonal half with wordmark */}
      <motion.div
        className="absolute inset-0 bg-primary"
        style={{ clipPath: SLASH.leftHalf }}
        variants={doorVariants(1, 0.6, 1.2)}
        initial="closed"
        animate={isRevealing ? "offscreen" : "duality"}
        onAnimationComplete={(definition: any) => {
          if (definition === "offscreen") {
            handleDismiss();
          }
        }}
      >
        <EasyLinkWordmark />
      </motion.div>

      {/* Orange panel - right diagonal half with wordmark */}
      <motion.div
        className="absolute inset-0 bg-accent"
        style={{ clipPath: SLASH.rightHalf }}
        variants={doorVariants(-1, 0.6, 1.2)}
        initial="closed"
        animate={isRevealing ? "offscreen" : "duality"}
      >
        <EasyLinkWordmark />
      </motion.div>
    </div>
  );
}
