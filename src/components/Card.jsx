export default function Card({ className = "", children }) {
  return (
    <section
      className={`rounded-[20px] border border-white/45 bg-white/[.32] shadow-[0_1px_2px_rgba(80,55,20,.04),0_12px_32px_-16px_rgba(80,55,20,.14)] backdrop-blur-[2px] ${className}`}
    >
      {children}
    </section>
  );
}
