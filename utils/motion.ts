import type { Variants } from "framer-motion";

/**
 * Shared easing curves - matching Ridox implementation
 */
export const EASING = {
  /** Fast start, smooth landing — primary easing for all transitions */
  redox: [0.76, 0, 0.24, 1],
  /** Gentle reveals */
  reveal: [0.16, 1, 0.3, 1],
} as const;

/**
 * Diagonal slash clip paths
 * Two halves that share the exact same edge to create a seamless split
 */
export const SLASH = {
  /** Left/green half - diagonal from top-left to bottom-right */
  leftHalf: "polygon(0% 0%, 62.2% 0%, 38.2% 100%, 0% 100%)",
  /** Right/orange half - overlaps slightly to prevent seam */
  rightHalf: "polygon(61.8% 0%, 100% 0%, 100% 100%, 37.8% 100%)",
} as const;

/**
 * Direction vector for the diagonal slash
 * Used to slide panels along the slash line
 */
export const SLASH_AXIS = { x: -0.36, y: 0.93 } as const;

/**
 * Panel animation variants for the diagonal door effect
 * @param direction 1 for left panel (exits top-left), -1 for right panel (exits bottom-right)
 * @param closeDuration Duration for closing animation
 * @param openDuration Duration for opening animation
 */
export function doorVariants(
  direction: 1 | -1,
  closeDuration: number,
  openDuration: number,
): Variants {
  return {
    offscreen: {
      x: `${-110 * direction}%`,
      y: `${-110 * direction}%`,
      transition: { duration: openDuration, ease: EASING.redox },
    },
    closed: {
      x: "0%",
      y: "0%",
      transition: { duration: closeDuration, ease: EASING.redox },
    },
    // The halves pass each other ALONG their shared edge, so the door stays
    // sealed while whatever is behind it loads.
    duality: {
      x: [0, 10 * SLASH_AXIS.x * direction, 0, -10 * SLASH_AXIS.x * direction, 0],
      y: [0, 10 * SLASH_AXIS.y * direction, 0, -10 * SLASH_AXIS.y * direction, 0],
      transition: { duration: 1.6, ease: "easeInOut", repeat: Infinity },
    },
  };
}
