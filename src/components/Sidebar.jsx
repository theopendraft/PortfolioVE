import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/about", label: "About Me", icon: "👤" },
    { to: "/projects/:id", label: "Projects", icon: "📂" },
    { to: "/contact", label: "Contact", icon: "📧" },
  ];

  return (
    <aside className="w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      <nav className="flex flex-col pt-14 gap-4 sm:gap-6" aria-label="Sidebar navigation">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 rounded-md transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              location.pathname === link.to ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""
            }`}
            aria-current={location.pathname === link.to ? "page" : undefined}
          >
            <span aria-hidden="true">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}