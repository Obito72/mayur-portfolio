import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FadeIn from "./FadeIn";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_72eawwl",
        "template_7v16fmq",
        form.current,
        {
          publicKey: "Y9qOtREGiB77Ud5iG",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <FadeIn>
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400 text-center mb-8">
            Interested in connecting or discussing cybersecurity,
            cloud security, IAM, or opportunities?
          </p>
        </FadeIn>

        {/* Social Links */}
        <FadeIn>
          <div className="flex justify-center gap-8 mb-12">

            {/* GitHub */}
            <a
              href="https://github.com/Obito72"
              target="_blank"
              rel="noreferrer"
              className="
                text-3xl
                text-gray-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
              "
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mayurgowda72/"
              target="_blank"
              rel="noreferrer"
              className="
                text-3xl
                text-gray-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
              "
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:mayurgowda72@gmail.com"
              className="
                text-3xl
                text-gray-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
              "
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="
              bg-white/5
              backdrop-blur-lg
              border
              border-cyan-500/20
              rounded-2xl
              p-8
              shadow-lg
              shadow-cyan-500/10
            "
          >

            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="from_name"
                className="block text-gray-300 mb-2"
              >
                Name
              </label>

              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                placeholder="Your name"
                className="
                  w-full
                  bg-black/30
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition
                "
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="from_email"
                className="block text-gray-300 mb-2"
              >
                Email
              </label>

              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                placeholder="your@email.com"
                className="
                  w-full
                  bg-black/30
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition
                "
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Write your message..."
                className="
                  w-full
                  bg-black/30
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition
                  resize-none
                "
              />

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full
                bg-cyan-500
                text-black
                font-semibold
                py-3
                rounded-lg
                hover:bg-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/30
                transition-all
                duration-300
              "
            >
              Send Message
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-cyan-400 mt-5">
                {status}
              </p>
            )}

          </form>
        </FadeIn>

      </div>
    </section>
  );
}

export default Contact;