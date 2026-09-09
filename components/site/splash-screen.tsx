"use client";

import { useEffect, useState } from "react";

const HOLD_MS = 750;
const FADE_MS = 500;

/**
 * First-paint brand splash. Renders above the page, then fades out and unmounts
 * so it never intercepts clicks. Content is still in the DOM underneath, so
 * this costs nothing for crawlers or for anyone who disables JavaScript — the
 * overlay simply never appears for them.
 */
export function SplashScreen() {
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDone(true);
      return;
    }
    const fade = setTimeout(() => setFading(true), HOLD_MS);
    const finish = setTimeout(() => setDone(true), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(fade);
      clearTimeout(finish);
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-opacity ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/rhye-mark-light.png"
        alt=""
        className="w-40 sm:w-52 animate-pulse"
      />
      <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
        Renewed Hope Youth Engagement
      </span>
    </div>
  );
}
