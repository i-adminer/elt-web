"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { useTransition } from "./TransitionContext";
import { useEffect } from "react";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Shown between the closed panels during loading, e.g. "Home" */
  label?: string;
  onNavigate?: () => void;
  "aria-label"?: string;
};

/**
 * Wrapper for Next.js Link that triggers page transition animation
 * Renders a real <a href> so crawlers and middle-click still work
 */
export function TransitionLink({
  href,
  children,
  className,
  label,
  onNavigate,
  ...rest
}: TransitionLinkProps) {
  const { navigate } = useTransition();
  const router = useRouter();

  // Prefetch the route for faster transitions
  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Let the browser handle new-tab / download / modified clicks natively
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    onNavigate?.();
    navigate(href, label);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      prefetch={true}
      {...rest}
    >
      {children}
    </Link>
  );
}
