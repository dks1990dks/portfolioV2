export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-16">
      <p className="text-cyan-500 dark:text-cyan-400 uppercase tracking-widest font-semibold text-sm">
        {subtitle}
      </p>
      
      {/* 
        Changes "text-white" to "text-slate-900 dark:text-white" 
        This ensures the title is dark slate on a white background, 
        but switches to pure white on a dark background.
      */}
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3 tracking-tight">
        {title}
      </h2>
    </div>
  );
}