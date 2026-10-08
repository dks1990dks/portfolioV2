import { contactServices } from "./contactData";
import { CheckCircle } from "lucide-react";

export default function ContactServices() {
  return (
    <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
      <h3 className="text-xl font-bold text-white mb-4">
        What I Can Build
      </h3>

      <div className="space-y-3">
        {contactServices.map((srv, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-slate-300 text-sm py-1.5 border-b border-slate-800/60 last:border-0"
          >
            <CheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />

            <span className="font-medium">{srv.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}