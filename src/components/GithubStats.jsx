import FadeIn from "./FadeIn";

function GithubStats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-4">
            GitHub Activity
          </h2>

          <p className="text-gray-400 text-center mb-12">
            My open-source work, projects, and continuous learning.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">

          {/* GitHub Stats */}
          <FadeIn>
            <div
              className="
                bg-white/5
                backdrop-blur-lg
                border border-cyan-500/20
                rounded-xl
                p-6
                hover:border-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-5">
                GitHub Statistics
              </h3>

              <img
                src="https://github-readme-stats.vercel.app/api?username=Obito72&show_icons=true&theme=tokyonight&hide_border=true"
                alt="GitHub Statistics"
                className="w-full"
              />
            </div>
          </FadeIn>

          {/* GitHub Streak */}
          <FadeIn>
            <div
              className="
                bg-white/5
                backdrop-blur-lg
                border border-cyan-500/20
                rounded-xl
                p-6
                hover:border-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-5">
                Contribution Streak
              </h3>

              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Obito72&theme=tokyonight&hide_border=true"
                alt="GitHub Contribution Streak"
                className="w-full"
              />
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}

export default GithubStats;