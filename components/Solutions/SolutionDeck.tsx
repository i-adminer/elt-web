"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Solution } from "@/data/solutions";
import { SolutionCard } from "./SolutionCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Scroll-lock stacking cards effect for solutions.
 * Each card pins to viewport and scales/darkens as the next slides over it.
 */
export function SolutionDeck({ solutions }: { solutions: Solution[] }) {
  const reduce = useReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this entire section (0 → 1)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Reduced motion fallback - plain vertical list
  if (reduce) {
    return (
      <div className="flex flex-col gap-8">
        {solutions.map((solution, index) => (
          <div key={solution.slug} className="min-h-[32rem]">
            <SolutionCard solution={solution} priority={index === 0} />
          </div>
        ))}
      </div>
    );
  }

  // The magic stacking layout
  return (
    <div ref={container} className="relative flex flex-col">
      {solutions.map((solution, index) => (
        <StackedCard
          key={solution.slug}
          solution={solution}
          index={index}
          total={solutions.length}
          progress={scrollYProgress}
          priority={index === 0}
        />
      ))}
    </div>
  );
}

function StackedCard({
  solution,
  index,
  total,
  progress,
  priority,
}: {
  solution: Solution;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  priority: boolean;
}) {
  // Each card gets its own "slice" of the scroll progress
  const start = index / total;        // Card 0: 0/6 = 0%
  const end = (index + 1) / total;    // Card 0: 1/6 = 16.67%
  const isLast = index === total - 1;

  // ANIMATION 1: Scale down from 100% → 95%
  const scale = useTransform(
    progress,
    [start, end],
    [1, isLast ? 1 : 0.95]  // Last card never scales
  );

  // ANIMATION 2: Move up 20px as it gets covered
  const y = useTransform(
    progress,
    [start, end],
    [0, isLast ? 0 : -20]   // Last card never moves
  );

  // ANIMATION 3: Dark scrim opacity 0% → 50%
  const scrim = useTransform(
    progress,
    [start, end],
    [0, isLast ? 0 : 0.5]   // Last card never darkens
  );

  return (
    // STICKY CONTAINER - Full viewport height drives scroll lock
    <div className="sticky top-0 flex h-[90svh] items-center py-4 md:h-[100svh] md:py-8">
      {/* ANIMATED CARD */}
      <motion.div
        style={{
          scale,           // Shrinks as covered
          y,               // Moves up as covered
          transformOrigin: "top center",  // Scale from top
        }}
        className="relative h-full w-full md:max-h-[30rem]"
      >
        <SolutionCard solution={solution} priority={priority} />
        
        {/* DARK SCRIM OVERLAY */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: scrim }}
          className="pointer-events-none absolute inset-0 rounded-2xl bg-black"
        />
      </motion.div>
    </div>
  );
}
