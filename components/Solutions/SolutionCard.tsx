"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import type { Solution } from "@/data/solutions";
import { TransitionLink } from "@/components/Transitions/TransitionLink";
import { useRef, useEffect } from "react";

function useSpotlight<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        node.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      });
    };

    node.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  return ref;
}

function CursorSpotlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(45, 88, 29, 0.12), transparent 60%)",
      }}
    />
  );
}

const MAX_TECH_PILLS = 5;

export function SolutionCard({
  solution,
  priority = false,
}: {
  solution: Solution;
  priority?: boolean;
}) {
  const ref = useSpotlight<HTMLDivElement>();
  const visibleTech = solution.techStack.slice(0, MAX_TECH_PILLS);
  const hiddenTechCount = solution.techStack.length - visibleTech.length;

  return (
    <article
      ref={ref}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm"
      style={{ borderColor: "rgba(45, 88, 29, 0.25)" }}
    >
      <CursorSpotlight />

      <div className="relative flex h-full flex-col md:flex-row">
        {/* IMAGE PANE */}
        <div className="relative aspect-[2/1] max-h-44 w-full shrink-0 overflow-hidden bg-gray-100 md:aspect-auto md:max-h-none md:h-full md:w-1/2">
          <Image
            src={solution.coverImage}
            alt={`${solution.title} — ${solution.subtitle}`}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 48rem) 100vw, 50vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top right, rgba(0,0,0,0.18), rgba(45,88,29,0.08))",
            }}
          />
        </div>

        {/* CONTENT PANE */}
        <div className="relative flex min-h-0 flex-1 flex-col justify-between gap-6 p-6 md:p-10">
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-mono uppercase tracking-wider"
              style={{ color: "var(--color-primary)" }}
            >
              ICT Solution
            </span>

            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {solution.title}
            </h3>

            <p
              className="line-clamp-2 text-base font-medium md:text-lg"
              style={{ color: "var(--color-accent)" }}
            >
              {solution.subtitle}
            </p>

            <p className="line-clamp-2 max-w-prose text-sm text-gray-600 sm:line-clamp-3 md:line-clamp-4 md:text-base">
              {solution.description}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-5">
            <ul className="flex flex-wrap gap-2">
              {visibleTech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-gray-300 px-2 py-1 font-mono text-[10px] text-gray-600 md:px-3 md:text-xs"
                >
                  {tech}
                </li>
              ))}
              {hiddenTechCount > 0 && (
                <li className="rounded-full border border-gray-300 px-2 py-1 font-mono text-[10px] text-gray-400 md:px-3 md:text-xs">
                  +{hiddenTechCount}
                </li>
              )}
            </ul>

            <TransitionLink
              href={solution.link}
              label={solution.title}
              className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-white transition-all hover:opacity-80"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Learn More
              <FaArrowRight size={11} aria-hidden="true" />
            </TransitionLink>
          </div>
        </div>
      </div>
    </article>
  );
}
