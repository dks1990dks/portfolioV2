import { Link } from "react-router-dom";

export default function FooterColumn({
  title,
  links = [],
  isRoute = false,
}) {
  return (
    <div>
      <h3 className="text-white font-bold text-xl mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((item) => (
          <li key={item.name || item}>
            {isRoute ? (
              <Link
                to={item.path}
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-slate-400">
                {item}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}