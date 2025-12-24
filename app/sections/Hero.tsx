export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">
        Krishnapal Goyal
      </h1>

      <p className="mt-4 text-xl text-gray-400">
        Ruby on Rails Developer
      </p>

      <p className="mt-6 max-w-xl text-gray-400">
        Building scalable web applications, APIs, and real-world systems
        with Ruby on Rails and modern technologies.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-gray-600 rounded-lg"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
