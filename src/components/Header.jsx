export default function Header() {
  return (
    <header
      className="bg-white dark:bg-gray-800 shadow-sm p-4 sm:p-6 lg:p-8 sticky top-0 z-10"
      aria-label="Site header"
    >
      <h1 className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-gray-100 font-bold animate-fade-in">
        <span aria-hidden="true">🎬</span>
        <span>Pankaj Yadav</span>
        <span className="sr-only">Portfolio of Pankaj Yadav</span>
      </h1>
    </header>
  );
}