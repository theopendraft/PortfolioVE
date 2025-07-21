import experience from "../data/experience";

export default function Timeline() {
  return (
    <section className="mt-10  ">
      <h3 className="text-2xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">
        <span aria-hidden="true">🧳</span>
        <span className="sr-only">Work Experience</span> Work Experience
      </h3>

      <div className="relative mx-auto overflow-x-auto">
        <div
          className="relative flex flex-row items-center justify-between py-40"
          style={{ minWidth: `${experience.length * 280}px` }}
        >
          <div className="absolute top-1/2 w-full h-1 bg-blue-600 transform -translate-y-1/2 z-0"></div>
          <ol className="relative flex flex-row items-center justify-between w-full">
            {experience.map((item, index) => {
              const isTop = index % 2 === 0;
              return (
                <li
                  key={index}
                  className="relative flex flex-col items-center text-center flex-1 px-2 group min-w-[280px]"
                >
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 transition-transform group-hover:scale-125" />

                  {/* Content Card */}
                  <div
                    className={`absolute w-64 ${
                      isTop ? "bottom-full mb-8" : "top-full mt-8"
                    } left-1/2 -translate-x-1/2`}
                  >
                    <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 p-4 rounded-lg transition-all duration-200 group-hover:scale-105">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.title || "Untitled"}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.date || "Unknown Date"}
                      </p>
                      {item.location && (
                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}