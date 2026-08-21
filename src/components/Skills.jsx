import FadeIn from "./FadeIn";

function Skills() {

  const skillCategories = [
    {
      title: "Cloud Security",
      skills: ["Azure", "AWS", "Entra ID", "IAM"]
    },
    {
      title: "Security Operations",
      skills: ["Wazuh", "SIEM", "Threat Detection", "Incident Response"]
    },
    {
      title: "Programming",
      skills: ["Python", "PowerShell", "Bash", "JavaScript"]
    },
    {
      title: "Networking",
      skills: ["TCP/IP", "DNS", "VPN", "Firewalls"]
    }
  ];

  return (
    <section
      id="skills"
      className="
        backdrop-blur-lg
        bg-white/5
        border border-cyan-500/20
        rounded-xl
        p-6
        hover:border-cyan-400
        hover:shadow-lg
        hover:shadow-cyan-500/20
        hover:-translate-y-2
        transition-all
        duration-300
        "
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => (
            <FadeIn key={index}>
            <div
               key={index}
              className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 text-gray-300">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>
                    • {skill}
                  </li>
                ))}
              </ul>

            </div>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}



export default Skills;
