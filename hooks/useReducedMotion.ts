"use client";

import { useEffect, useState } from "react";

/**
 * Detects if the user has requested reduced motion via OS settings.
 * Used to provide simpler animations or disable them entirely for accessibility.
 */
export function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Set initial value
    setReduce(mediaQuery.matches);

    // Listen for changes
    const onChange = (event: MediaQueryListEvent) => {
      setReduce(event.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    
    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return reduce;
}
