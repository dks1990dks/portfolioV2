export default function Section({ children, className = "" }) {
  return (
    <section
      className={`
        py-20
        md:py-28
        w-full
        relative
        ${className}
      `}
    >
      {children}
    </section>
  );
}