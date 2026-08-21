import FadeIn from "./FadeIn";

function Projects() {
  const projects = [
    {
      title: "Azure IAM Lab",
      description:
        "Implemented RBAC, Conditional Access, MFA, SSO, and Identity Governance using Microsoft Entra ID.",
      technologies: [
        "Azure",
        "Entra ID",
        "IAM",
        "RBAC",
        "MFA"
      ],
      github: "#",
      demo: "#",
    },

    {
      title: "Wazuh SIEM Home Lab",
      description:
        "Built a SIEM lab using Wazuh and ELK Stack to monitor logs, detect brute-force attacks, and investigate security events.",
      technologies: [
        "Wazuh",
        "ELK",
        "Linux",
        "SIEM"
      ],
      github: "#",
      demo: "#",
    },

    {
      title: "DevSecOps Malware Detection",
      description:
        "Integrated AI-powered malware detection into a DevSecOps pipeline using Docker, Kubernetes, Jenkins, and Trivy.",
      technologies: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Python",
        "Trivy"
      ],
      github: "#",
      demo: "#",
    }
  ];

  return (
    <section
      id="projects"
      className="
        bg-white/5
        backdrop-blur-lg
        border border-cyan-500/20
        rounded-xl
        p-6
        hover:border-cyan-400
        hover:shadow-xl
        hover:shadow-cyan-500/20
        hover:-translate-y-2
        transition-all
        duration-300
        "
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <FadeIn key={index}>
            <div
              
              className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  className="bg-cyan-500 px-4 py-2 rounded-lg text-black font-semibold"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="border border-cyan-500 px-4 py-2 rounded-lg"
                >
                  Demo
                </a>

              </div>

            </div>
          </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;