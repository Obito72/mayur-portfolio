import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-8">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">

        <p className="text-gray-400">
          © 2026 Mayur Gowda
        </p>

        <div className="flex gap-6 text-2xl">

          <a
            href="YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;