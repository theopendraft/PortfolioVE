import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

export default function CategorySlider({ title, videos }) {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {videos.map((video, idx) => (
          <Link to={`/projects/${video.id}`} key={idx} className="min-w-[300px]">
            <div>
              <ReactPlayer
                src={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                width="100%"
                height="180px"
              />
              <p className="mt-2 font-medium">{video.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

