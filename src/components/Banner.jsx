import ReactPlayer from "react-player";


export default function Banner() {
  return (
    <section className="relative w-full h-[60vh] mb-8">
      <ReactPlayer
        src='https://www.youtube.com/watch?v=rXYi8fLsrI4'
        //playing
        //loop
        muted
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Elevate Your Brand With Visual Storytelling
        </h2>
      </div>
    </section>
  );
}
