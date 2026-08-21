import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        bg-black/40
        backdrop-blur-md
        shadow-lg
        shadow-cyan-500/10
        border-b
        border-cyan-500/10
        z-50
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="
            text-2xl
            font-bold
            text-cyan-400
            tracking-wide
            hover:text-cyan-300
            transition-all
            duration-300
          "
        >
          Mayur Gowda
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300">

          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`
                  relative
                  transition-all
                  duration-300
                  ${
                    activeSection === section.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }
                `}
              >
                {section.label}

                {/* Active underline */}
                <span
                  className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    bg-cyan-400
                    transition-all
                    duration-300
                    ${
                      activeSection === section.id
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="
            md:hidden
            text-2xl
            text-cyan-400
            cursor-pointer
          "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-500/10">

          <ul className="flex flex-col items-center gap-6 py-8">

            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    transition-all
                    duration-300
                    ${
                      activeSection === section.id
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300 hover:text-cyan-400"
                    }
                  `}
                >
                  {section.label}
                </a>
              </li>
            ))}

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;