"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const footerLinks = {
  Commission: [
    { name: "Our Mandate", href: "#mandate" },
    { name: "Focus Areas", href: "#focus-areas" },
    { name: "Leadership", href: "#leadership" },
    { name: "About NCDC", href: "#about" },
  ],
  Transparency: [
    { name: "FOI Requests", href: "#" },
    { name: "Budgets & Documents", href: "#" },
    { name: "Report a Project", href: "#" },
    { name: "Establishment Act", href: "https://placng.org/i/wp-content/uploads/2025/05/North-Central-Development-Commision-Establishment-Act-2024.pdf" },
  ],
  "Our Work": [
    { name: "Newsroom", href: "#newsroom" },
    { name: "Resources", href: "#resources" },
    { name: "Contact Us", href: "#" },
    { name: "Careers", href: "#" },
  ],
  States: [
    { name: "Benue", href: "#" },
    { name: "Kogi", href: "#" },
    { name: "Kwara", href: "#" },
    { name: "Nasarawa · Plateau · Niger · FCT", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
];

function AnimatedWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(100, 200, 150, 0.3)";
      ctx.lineWidth = 1;

      for (let wave = 0; wave < 3; wave++) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const y =
            height * 0.5 +
            Math.sin(x * 0.01 + time + wave * 0.5) * 30 +
            Math.sin(x * 0.02 + time * 1.5 + wave) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.02;
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export function FooterSection() {
  return (
    <footer className="relative bg-foreground text-white">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Iss072e095268_%28Oct_20%2C_2024%29_---_The_Niger_River_splits_into_its_tributary%2C_the_Benue_River%2C_at_the_Nigerian_city_of_Lokoja_with_a_population_of_over_692%2C00_in_this_photograph_from_the_International_Space_Station_as_i.jpg/1920px-thumbnail.jpg"
          alt="Niger-Benue confluence from ISS"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade to dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground" />
      </div>

      {/* Footer content — black background, white text */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-3 mb-6">
                <img src="/ncdc-logo.png" alt="NCDC" className="h-10" />
                <div className="flex flex-col">
                  <span className="text-lg font-display text-white font-bold">NCDC</span>
                  <span className="text-xs text-white/60 font-mono leading-none">Federal Commission</span>
                </div>
              </a>

              <p className="text-white/70 leading-relaxed mb-8 max-w-xs text-sm">
                Driving reconstruction, rehabilitation and sustainable development across the North Central region.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>&copy; 2025 NCDC — an agency of the Federal Republic of Nigeria</span>
            <span className="text-white/30">·</span>
            <a href="#" className="hover:text-white transition-colors">Image credits — Wikimedia Commons</a>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Commission operational · Lafia HQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
