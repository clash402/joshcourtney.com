import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181a20] text-white font-sans px-4">
      {/* Profile Picture */}
      <div className="w-36 h-36 border-4 border-gray-300 rounded-full bg-[#23242a] flex items-center justify-center mb-8 shadow-lg overflow-hidden">
        <Image
          src="/headshot.png"
          alt="Josh Courtney"
          width={144}
          height={144}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-[#3ea6ff] mb-2 text-center">Josh Courtney</h1>
      {/* Title */}
      <h2 className="text-lg sm:text-2xl font-medium text-gray-200 mb-4 text-center">Full Stack Engineer <span className="text-[#3ea6ff]">→</span> AI Engineer</h2>
      {/* Tagline */}
      <p className="text-base sm:text-lg text-gray-300 mb-10 text-center max-w-xl">Building future-ready tools that<br />think and adapt.</p>
      {/* Social Icons */}
      <div className="flex gap-8 mt-4">
        <a href="https://github.com/clash402" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} className="text-2xl sm:text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="https://linkedin.com/in/joshcourtney402" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl sm:text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="https://www.threads.com/@joshrcourtney" target="_blank" rel="noopener noreferrer" aria-label="Threads">
          <FontAwesomeIcon icon={faThreads} className="text-2xl sm:text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="https://instagram.com/joshrcourtney" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="mailto:joshrcourtney@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl sm:text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
      </div>
    </div>
  );
}
