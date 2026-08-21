import FadeIn from "./FadeIn";

function Certifications() {
  const certifications = [
    {
      title: "CompTIA Security+",
      status: "In Progress",
      year: "2026"
    },
    {
      title: "Microsoft SC-900",
      status: "Planned",
      year: "2026"
    },
    {
      title: "Microsoft AZ-900",
      status: "Planned",
      year: "2026"
    },
    {
      title: "CCNA",
      status: "Completed",
      year: "2025"
    }
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-[#0d1324]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (
            <FadeIn key={index}>
            <div
              
              className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-cyan-400">
                {cert.status}
              </p>

              <p className="text-gray-400 mt-2">
                {cert.year}
              </p>

            </div>
          </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;