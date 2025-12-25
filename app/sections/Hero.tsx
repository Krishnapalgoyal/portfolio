import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-28 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/rails.png"
              alt="Ruby on Rails"
              width={60}
              height={60}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <br />
            <span className="text-white">Krishnapal Goyal</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            Software Developer with 3+ years of experience building scalable
            backend systems, REST APIs, and real-world applications using
            Ruby on Rails.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white-500">
            <Image
              src="/me.jpeg"
              alt="Krishnapal Goyal"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
