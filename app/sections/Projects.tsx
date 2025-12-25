const projects = [
  {
    title: "One IDP (Single Sign-On Platform)",
    role: "SSO Implementation Specialist",
    description:
      "Implemented Single Sign-On (SSO) by integrating Identity Provider and Service Provider systems. Designed secure authentication flows and handled user access management across multiple applications.",
    tech: ["Ruby on Rails", "SSO", "OAuth", "REST APIs"],
  },
  {
    title: "Scalefusion – Device Management System",
    role: "Ruby on Rails Developer",
    description:
      "Worked on backend development for device management solutions. Built APIs for device monitoring and management, integrated Google Admin SDK APIs, and supported scalable backend workflows.",
    tech: ["Ruby on Rails", "REST APIs", "Google Admin SDK", "Device Management"],
  },
  {
    title: "BMS & CDM Platform",
    role: "Backend Developer",
    description:
      "Developed visitor, contractor, and vehicle entry/exit workflows with real-time tracking. Built dashboard APIs for daily and live statistics, and implemented centralized device monitoring with real-time status updates.",
    tech: ["Ruby on Rails", "APIs", "Real-time Systems", "Device Monitoring"],
  },
  {
    title: "Fashion Aggregator",
    role: "Backend Developer",
    description:
      "Developed and tested APIs for multiple Builder projects. Handled complete API flow testing using Postman collections, edge case validations, and backend logic implementation.",
    tech: ["Ruby on Rails", "API Development", "Postman", "Testing"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition bg-black"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Role: {project.role}
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-gray-600 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
