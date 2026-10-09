export default function Section({
  children,
  className = "",
  ...props
}) {
  return (
    <section
      {...props}
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