import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 rounded-2xl shadow-md">
      <h3 className="text-3xl font-bold mb-4">Let’s Work Together 🎥</h3>
      <p className="text-lg mb-6">
        Whether it's a promotional video, reel, or full documentary-style edit —
        I’m ready to bring your vision to life.
      </p>
      <Link to="/contact">
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
