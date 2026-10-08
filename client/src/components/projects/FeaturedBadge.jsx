import { FaStar } from "react-icons/fa";

export default function FeaturedBadge() {
  return (
    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20">
      <FaStar className="text-[10px]" />
      <span>Featured</span>
    </div>
  );
}