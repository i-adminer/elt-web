"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Phase 1 → panels close over the current page.
 * Phase 2 → panels held closed while the new route loads.
 * Phase 3 → panels open, revealing the new page.
 */
export type TransitionPhase = "idle" | "closing" | "loading" | "opening";

type TransitionState = {
  phase: TransitionPhase;
  /** Destination label rendered between the closed panels */
  label: string | null;
  /** True from the moment panels start closing until they finish opening */
  covered: boolean;
  navigate: (href: string, label?: string) => void;
  /** Called when the close animation completes */
  onPanelsClosed: () => void;
  /** Called when the open animation completes */
  onPanelsOpened: () => void;
};

const TransitionCtx = createContext<TransitionState | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [label, setLabel] = useState<string | null>(null);
  const pendingHref = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string, linkLabel?: string) => {
      // Don't navigate if already on the page or a transition is in progress
      if (href === pathname || pendingHref.current) return;
      
      pendingHref.current = href;
      setLabel(linkLabel ? `${linkLabel.toUpperCase()}` : null);
      setPhase("closing");
    },
    [pathname],
  );

  // Phase 1 complete: the page is fully covered, safe to swap routes
  const onPanelsClosed = useCallback(() => {
    setPhase("loading");
    if (pendingHref.current) {
      router.push(pendingHref.current);
    }
  }, [router]);

  // The new route has committed — open the panels to reveal it
  useEffect(() => {
    if (phase !== "loading") return;
    if (!pendingHref.current) return;
    if (pathname !== pendingHref.current) return;
    
    pendingHref.current = null;
    setPhase("opening");
  }, [pathname, phase]);

  const onPanelsOpened = useCallback(() => {
    setPhase("idle");
    setLabel(null);
  }, []);

  return (
    <TransitionCtx.Provider
      value={{
        phase,
        label,
        covered: phase !== "idle",
        navigate,
        onPanelsClosed,
        onPanelsOpened,
      }}
    >
      {children}
    </TransitionCtx.Provider>
  );
}

export function useTransition(): TransitionState {
  const ctx = useContext(TransitionCtx);
  if (!ctx) {
    throw new Error("useTransition must be used inside <TransitionProvider>");
  }
  return ctx;
}
