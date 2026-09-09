/**
 * Route-level loading UI. Next.js renders this while a route segment streams,
 * so it carries the same mark as the first-paint splash for continuity.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-primary">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/rhye-mark-light.png"
        alt=""
        aria-hidden="true"
        className="w-32 sm:w-44 animate-pulse"
      />
      <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
        Loading
      </span>
    </div>
  );
}
