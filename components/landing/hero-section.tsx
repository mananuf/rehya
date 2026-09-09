"use client";

import { useEffect, useState, useRef } from "react";

const words = ["automate", "delegate", "execute", "scale"];

function BlurWord({ word, trigger }: { word: string; trigger: number }) {
  const letters = word.split("");
  const STAGGER = 45;      // ms between each letter
  const DURATION = 500;    // blur+opacity fade duration per letter
  const GRADIENT_HOLD = STAGGER * letters.length + DURATION + 200;

  const [letterStates, setLetterStates] = useState<{ opacity: number; blur: number }[]>(
    letters.map(() => ({ opacity: 0, blur: 20 }))
  );
  const [showGradient, setShowGradient] = useState(true);
  const framesRef = useRef<number[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // reset
    framesRef.current.forEach(cancelAnimationFrame);
    timersRef.current.forEach(clearTimeout);
    framesRef.current = [];
    timersRef.current = [];

    setLetterStates(letters.map(() => ({ opacity: 0, blur: 20 })));
    setShowGradient(true);

    // stagger each letter
    letters.forEach((_, i) => {
      const t = setTimeout(() => {
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setLetterStates(prev => {
            const next = [...prev];
            next[i] = { opacity: eased, blur: 20 * (1 - eased) };
            return next;
          });
          if (progress < 1) {
            const id = requestAnimationFrame(tick);
            framesRef.current.push(id);
          }
        };
        const id = requestAnimationFrame(tick);
        framesRef.current.push(id);
      }, i * STAGGER);
      timersRef.current.push(t);
    });

    // remove gradient once all letters are settled
    const gt = setTimeout(() => setShowGradient(false), GRADIENT_HOLD);
    timersRef.current.push(gt);

    return () => {
      framesRef.current.forEach(cancelAnimationFrame);
      timersRef.current.forEach(clearTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  // gradient colours cycling across letter positions
  const gradientColors = ["#eca8d6", "#a78bfa", "#67e8f9", "#fbbf24", "#eca8d6"];

  return (
    <>
      {letters.map((char, i) => {
        const colorIndex = (i / Math.max(letters.length - 1, 1)) * (gradientColors.length - 1);
        const lower = Math.floor(colorIndex);
        const upper = Math.min(lower + 1, gradientColors.length - 1);
        const t = colorIndex - lower;

        // lerp hex colours
        const hex2rgb = (hex: string) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return [r, g, b];
        };
        const [r1, g1, b1] = hex2rgb(gradientColors[lower]);
        const [r2, g2, b2] = hex2rgb(gradientColors[upper]);
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: letterStates[i]?.opacity ?? 0,
              filter: `blur(${letterStates[i]?.blur ?? 20}px)`,
              color: showGradient ? `rgb(${r},${g},${b})` : "white",
              transition: "color 0.4s ease",
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/*
          Desktop keeps the town as the backdrop, with the portrait as a
          separate figure in the reserved right-hand space further down.
          Below lg there is no space beside the copy for that figure, so the
          portrait becomes the backdrop itself and the town drops away.
        */}
        <img
          src="/images/jos-city.jpg"
          alt=""
          aria-hidden="true"
          className="hidden lg:block w-full h-full object-cover object-center opacity-50"
        />

        {/* Overlay for text readability — desktop */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/20" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      {/*
        Right-hand figure. The hero reserves this space already — the copy is
        capped at lg:max-w-[55%] — so the portrait fills it without touching the
        headline. Two nested masks feather it: the outer fades the left edge
        into the copy, the inner fades the base into the stats strip. Nested
        rather than composited so it works without mask-composite support.
      */}
      {/*
        Mobile figure. The copy and stats already fill a phone screen, so the
        portrait cannot sit clear of them — it is raised until the eyes clear
        the stats row, and a scrim below whitens the lower face so the numbers
        stay legible over it.
      */}
      <div
        aria-hidden="true"
        className="lg:hidden absolute bottom-20 right-0 z-[5] w-full max-w-[460px] aspect-[1050/888] pointer-events-none select-none"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 45%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, #000 45%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/president-tinubu.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: "saturate(0.8) brightness(1.04)" }}
        />
      </div>
      <div
        aria-hidden="true"
        className="lg:hidden absolute inset-x-0 bottom-0 z-[6] h-[38%] max-h-[300px] pointer-events-none bg-gradient-to-t from-white via-white/90 to-transparent"
      />

      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-0 bottom-0 z-[5] w-[46%] h-[88%] pointer-events-none select-none"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 38%)",
          maskImage: "linear-gradient(to right, transparent 0%, #000 38%)",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, #000 24%, #000 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to top, transparent 0%, #000 24%, #000 88%, transparent 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/president-tinubu.jpg"
            alt=""
            className="w-full h-full object-cover object-[45%_top]"
            style={{ filter: "saturate(0.8) brightness(1.04)" }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="lg:max-w-[55%]">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary">
            <span className="w-8 h-px bg-primary" />
            Renewed Hope Agenda · 36 States + FCT · 774 LGAs
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-left text-[clamp(2rem,6vw,7rem)] font-display leading-[0.92] tracking-tight text-foreground transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block whitespace-nowrap">Young Nigerians at</span>
            <span className="block whitespace-nowrap">
              the{" "}
              <span className="text-primary">centre</span>.
            </span>
          </h1>
          <p className={`mt-6 text-lg text-muted-foreground max-w-[600px] leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            A national platform mobilising young Nigerians into governance — through coordinating units in all 36 states and the FCT, and mobilisers in every one of 774 local government areas.
          </p>
        </div>
        </div>
      </div>
      
      {/* Stats — 4 metrics static */}
      <div 
        className={`relative z-10 mt-4 pb-12 sm:mt-0 sm:pb-0 sm:absolute sm:bottom-12 left-0 right-0 px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-start gap-6 lg:gap-14 flex-wrap">
          {[
            { value: "36 States +", label: "FCT Coverage" },
            { value: "774", label: "Local Government Areas" },
            { value: "8,809", label: "Wards Nationwide" },
            { value: "70M+", label: "Young Nigerians" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl lg:text-3xl font-display text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground leading-tight font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile attribution — the portrait is the backdrop there, so it still needs naming. */}
      <div className="lg:hidden relative z-10 px-6 pb-10 -mt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/90">
          President Bola Ahmed Tinubu, GCFR
        </p>
        <p className="mt-1 font-mono text-[10px] text-foreground/60">
          The Renewed Hope Agenda
        </p>
      </div>

      {/*
        Names the office rather than letting the portrait imply endorsement.
        Shares the stats strip's baseline: stats left, attribution right.
      */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-10 text-right max-w-[300px]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/90 leading-relaxed">
          President Bola Ahmed Tinubu, GCFR
        </p>
        <p className="mt-1 font-mono text-[10px] text-foreground/60">
          The Renewed Hope Agenda
        </p>
      </div>

    </section>
  );
}
