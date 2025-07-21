import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen w-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 z-20 w-[240px] bg-white dark:bg-gray-800 transform transition-transform duration-300 md:static md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Main navigation"
      >
        <Sidebar />
        <button
          className="md:hidden absolute top-4 right-4 p-2 text-gray-200 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={toggleSidebar}
          aria-controls="sidebar"
          aria-expanded={isSidebarOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isSidebarOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <Header />
        </header>

        {/* Main */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
}