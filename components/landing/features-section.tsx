"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Mobilise & Organise",
    description: "Build a coordinating structure that reaches young people where they already are — communities, markets, campuses and religious institutions — from the National Secretariat down to every ward.",
    stats: { value: "774", label: "local government areas" },
  },
  {
    number: "02",
    title: "Participate, Not Receive",
    description: "The programme's founding proposition: young Nigerians as active contributors to development, taking part in governance and the political process — not standing by as beneficiaries of it.",
    stats: { value: "8,809", label: "wards nationwide" },
  },
  {
    number: "03",
    title: "Train & Equip",
    description: "Leadership, digital and enterprise training for coordinators and the young people they organise, plus signposting to the federal skills, student financing and credit schemes already available.",
    stats: { value: "8", label: "programme pillars" },
  },
  {
    number: "04",
    title: "Peace Without Compromise",
    description: "Active participation, and a firm rejection of political violence, hate speech, intimidation and misinformation — the charge repeated at every state inauguration.",
    stats: { value: "37", label: "coordinating units" },
  },
];

// Floating dot particles visualization
function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Generate stable particle positions
    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: ((seed * 127.1) % 1),
        by: ((seed * 311.7) % 1),
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;

        const bx = p.bx * w;
        const by = p.by * h;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = by + flowY + influence * Math.sin(time + p.phase) * 36;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mandate"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-secondary"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Full width with diagonal layout */}
        <div className="relative mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
                <span className="w-12 h-px bg-primary" />
                Our Mandate
              </span>
              <h2
                className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] text-foreground transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Mobilising
                <br />
                <span className="text-primary">a generation.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className={`text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                The Renewed Hope Youth Engagement works across all 36 states and the Federal Capital Territory to bring young Nigerians into governance — organised, trained and accountable.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Large feature card */}
          <div 
            className={`lg:col-span-12 relative bg-white border border-primary/20 min-h-[500px] overflow-hidden group transition-all duration-700 flex ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setActiveFeature(0)}
          >
            {/* Left: text content */}
            <div className="relative flex-1 p-8 lg:p-12 bg-white">
              <div className="relative z-10">
                <span className="font-mono text-sm text-primary font-medium">{features[0].number}</span>
                <h3 className="text-3xl lg:text-4xl font-display mt-4 mb-6 text-foreground group-hover:translate-x-2 transition-transform duration-500">
                  {features[0].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                  {features[0].description}
                </p>
                <div>
                  <span className="text-5xl lg:text-6xl font-display text-primary">{features[0].stats.value}</span>
                  <span className="block text-sm text-muted-foreground font-mono mt-2">{features[0].stats.label}</span>
                </div>
              </div>
            </div>

            {/* Right: image, full height */}
            <div className="hidden lg:block relative w-[42%] shrink-0 overflow-hidden">
              <img
                src="/images/classroom.jpg"
                alt="A digital skills session in a Nigerian classroom"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Fade left edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
            </div>
          </div>

          {/* Remaining mandate cards */}
          {features.slice(1).map((feature, index) => (
            <div
              key={feature.number}
              className={`lg:col-span-4 relative bg-white border border-primary/20 p-8 lg:p-10 group transition-all duration-700 hover:border-primary ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms" }}
              onMouseEnter={() => setActiveFeature(index + 1)}
            >
              <span className="font-mono text-sm text-primary font-medium">{feature.number}</span>
              <h3 className="text-2xl lg:text-3xl font-display mt-4 mb-4 text-foreground group-hover:translate-x-2 transition-transform duration-500">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
