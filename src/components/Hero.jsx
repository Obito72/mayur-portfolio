import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full top-10 left-10"></div>

      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full bottom-10 right-10"></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-cyan-400 text-lg mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">Mayur Gowda</h1>

          <TypeAnimation
            sequence={[
              "Cloud Security Engineer",
              2000,
              "IAM Engineer",
              2000,
              "Security Analyst",
              2000,
              "DevSecOps Engineer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl text-gray-300 mb-6 block"
          />

          <p className="text-gray-400 mb-8 max-w-xl">
            Information Science Engineering student focused on Cloud Security,
            Identity & Access Management (IAM), SIEM, and Security Automation.
            Building hands-on security labs and projects to develop practical
            cybersecurity expertise.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Obito72"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mayurgowda72/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.img
            src="/mayur.jpg"
            alt="Mayur Gowda"
            className="w-[350px] h-[350px] rounded-full object-cover border-4 border-cyan-400"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
