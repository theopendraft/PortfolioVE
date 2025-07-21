import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import ReactPlayer from "react-player";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        Project not found. <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-6">
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p className="text-sm text-gray-500">{project.category}</p>

      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${project.youtubeId}`}
        width="100%"
        height="400px"
        className="rounded-lg overflow-hidden"
      />

      <div>
        <h3 className="text-xl font-semibold">🧰 Tools Used</h3>
        <ul className="flex flex-wrap gap-3 mt-2">
          {project.tools.map((tool, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">📄 Description</h3>
        <p className="text-gray-700">{project.description}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">🎯 Challenges & Solutions</h3>
        <p className="text-gray-700">{project.challenges}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">📈 Outcome</h3>
        <p className="text-gray-700">{project.outcome}</p>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
