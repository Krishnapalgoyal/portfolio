"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_e6fv53x",
        "template_kkt6e09",
        formRef.current!,
        "dg6u6QH9LCf_2WFhN"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current?.reset();
          setLoading(false);
        },
        () => {
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I’m open to full-time roles, freelance opportunities, and
            collaboration on interesting projects.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT: Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800
                           border border-gray-700 text-white
                           focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800
                           border border-gray-700 text-white
                           focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800
                           border border-gray-700 text-white
                           focus:outline-none focus:border-gray-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg font-medium
                         bg-white text-black hover:bg-gray-200
                         transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* RIGHT: Contact Info + Icons */}
          <div className="space-y-10">

            {/* Direct Info */}
            <div className="space-y-3 text-gray-400">
              <p>📧 krishnapal1224@gmail.com</p>
              <p>📞 +91 7089731053</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/krishnapal-kumawat-4b024b219/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-3 rounded-lg
                           border border-gray-700 text-gray-300
                           hover:border-gray-500 hover:text-white transition"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/Krishnapalgoyal"
                target="_blank"
                className="flex items-center gap-2 px-4 py-3 rounded-lg
                           border border-gray-700 text-gray-300
                           hover:border-gray-500 hover:text-white transition"
              >
                🐙 GitHub
              </a>

              <a
                href="https://wa.me/917089731053"
                target="_blank"
                className="flex items-center gap-2 px-4 py-3 rounded-lg
                           border border-gray-700 text-gray-300
                           hover:border-gray-500 hover:text-white transition"
              >
                💬 WhatsApp
              </a>

              <a
                href="mailto:krishnapal1224@gmail.com"
                className="flex items-center gap-2 px-4 py-3 rounded-lg
                           border border-gray-700 text-gray-300
                           hover:border-gray-500 hover:text-white transition"
              >
                📧 Gmail
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-24 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Krishnapal Goyal
        </p>

      </div>
    </section>
  );
}
