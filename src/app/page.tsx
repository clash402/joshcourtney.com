import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181920] text-white font-sans">
      {/* Profile Picture Placeholder */}
      <div className="w-36 h-36 rounded-full bg-[#23242a] flex items-center justify-center mb-8">
        {/* Replace with <Image /> when profile picture is available */}
        <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg>
      </div>
      {/* Name */}
      <h1 className="text-4xl font-bold text-[#3ea6ff] mb-2">Josh Courtney</h1>
      {/* Title */}
      <h2 className="text-xl font-medium text-gray-200 mb-4">Full Stack Engineer <span className="text-[#3ea6ff]">→</span> AI Engineer</h2>
      {/* Tagline */}
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">Building future-ready tools that<br />think and adapt.</p>
      {/* Social Icons */}
      <div className="flex gap-8 mt-4">
        <a href="https://github.com/clash402" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="https://linkedin.com/in/joshcourtney" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="https://joshcourtney.com" target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
          <FontAwesomeIcon icon={faAt} className="text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="https://instagram.com/joshcourtney" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
        <a href="mailto:hello@joshcourtney.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl hover:text-[#3ea6ff] transition-colors" />
        </a>
      </div>
    </div>
  );
}
