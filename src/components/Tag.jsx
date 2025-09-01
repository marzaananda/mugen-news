import { Link } from "react-router-dom";

export default function Tag({ label }) {
  return (
    <Link
      to={`/tag/${label.toLowerCase()}`}
      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition"
    >
      {label}
    </Link>
  );
}
