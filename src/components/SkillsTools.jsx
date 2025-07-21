import skills from "../data/skills";

export default function SkillsTools() {
  return (
    <section
      dir="ltr"
      className=" mb-8 sm:mt-12 lg:mt-16 animate-fade-in text-center space-y-6 sm:space-y-8 lg:space-y-10"
      aria-label="Skills and tools section"
    >
      <h3 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">
        <span aria-hidden="true">🛠️</span>
        <span>Skills & Tools</span>
        <span className="sr-only">Skills and Tools of Pankaj Yadav</span>
      </h3>

      <div className=" gap-6 sm:gap-8 lg:gap-10">
        {/* Tools Section */}
        <div className="mb-6 px-14 mx-14 sm:mb-8 lg:mb-10 border border-gray-200 dark:border-gray-700 p-6 sm:pb-8 lg:pb-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
            Tools
          </h4>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4" role="list">
            {skills.tools?.length ? (
              skills.tools.map((tool, index) => (
                <li
                  key={index}
                  className="px-4 py-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-800"
                  role="listitem"
                >
                  {tool}
                </li>
              ))
            ) : (
              <li className="text-gray-500 dark:text-gray-400 text-sm">
                No tools listed
              </li>
            )}
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-6 item-center justify-center mx-14  sm:mb-8 lg:mb-10 border border-gray-200 dark:border-gray-700 p-6 sm:pb-8 lg:pb-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
            Editing Skills
          </h4>
          <ul className="flex items-center justify-center flex-wrap gap-3 sm:gap-4" role="list">
            {skills.skills?.length ? (
              skills.skills.map((skill, index) => (
                <li
                  key={index}
                  className="px-4 py-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-green-200 dark:hover:bg-green-800"
                  role="listitem"
                >
                  {skill}
                </li>
              ))
            ) : (
              <li className="text-gray-500 dark:text-gray-400 text-sm">
                No skills listed
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
