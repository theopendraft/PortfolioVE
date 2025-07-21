export default function Footer() {
  return (
    <footer className="mt-16 py-6 border-t text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Siddarth Yadav · All rights reserved.</p>

      <div className="flex justify-center gap-4 mt-3">
        <a
          href="https://www.youtube.com/@YourChannel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          YouTube
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
