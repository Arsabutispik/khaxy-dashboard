import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function LandingPage() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-6xl font-extrabold tracking-wide" style={{ fontFamily: 'sans-serif' }}>
          SOON™
        </h1>
        <div className="flex gap-6 mt-4">
          <a
              href="https://github.com/Arsabutispik/KhaxyRewrite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl hover:text-gray-400"
          >
            <FaGithub size={28} /> Khaxy
          </a>
          <a
              href="mailto:support@khaxy.net"
              className="flex items-center gap-2 text-xl hover:text-gray-400"
          >
            <FaEnvelope size={28} /> support@khaxy.net
          </a>
        </div>
      </div>
  );
}
