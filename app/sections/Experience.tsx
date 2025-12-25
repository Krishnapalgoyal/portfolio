const experiences = [
  {
    company: "Greenbotz Platform Pvt. Ltd",
    role: "Software Engineer (Ruby on Rails)",
    duration: "Jul 2025 – Present",
    location: "Coimbatore",
    points: [
      "Designed and implemented core backend modules using Ruby on Rails",
      "Optimized slow queries and improved listing load performance",
      "Ensured data security, validation, and encrypted sensitive fields",
      "Deployed features across development, staging, and production environments",
      "Worked on device management workflows and real-time systems",
    ],
  },
  {
    company: "Shreegorack Technologies",
    role: "Ruby on Rails Developer",
    duration: "May 2024 – May 2025",
    location: "Indore",
    points: [
      "Developed and maintained web applications using Ruby on Rails",
      "Improved application performance through refactoring and optimization",
      "Worked on Builder projects and enhanced platform capabilities",
      "Collaborated with frontend developers to integrate UI with backend logic",
    ],
  },
  {
    company: "Sprintale Technologies",
    role: "Software Developer (Ruby on Rails)",
    duration: "Aug 2022 – Apr 2024",
    location: "Indore",
    points: [
      "Led development and maintenance of web applications based on client requirements",
      "Built and integrated RESTful APIs with third-party services",
      "Managed database integrations and data migrations",
      "Collaborated with cross-functional teams to deliver solutions on time",
      "Participated in code reviews, testing, and debugging",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                <p className="text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <ul className="mt-4 list-disc ml-5 space-y-2 text-gray-400">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
