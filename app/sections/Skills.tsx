const skillGroups = [
  {
    title: "Backend",
    icon: "⚙️",
    description: "Scalable APIs & backend systems",
    skills: [
      "Ruby",
      "Ruby on Rails",
      "REST APIs",
      "RSpec",
      "Searchkick",
      "Multi-Tenancy",
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    description: "Interactive & responsive UI",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Bootstrap",
      "HAML",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🐳",
    description: "Deployment & infrastructure",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Swarm",
      "Linux",
      "Postman",
    ],
  },
  {
    title: "Management & Collaboration",
    icon: "🤝",
    description: "Teamwork & delivery",
    skills: [
      "Jira",
      "Slack",
      "Builder AI",
      "MQTT",
      "Nifty",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Technologies and tools I use to build reliable, scalable applications
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 border border-[var(--border)] 
                         bg-[var(--surface)] hover:shadow-xl transition"
            >
              {/* Gradient Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl 
                              bg-gradient-to-r from-[var(--accent)] to-transparent" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl
                                bg-[var(--background)] border border-[var(--border)] text-2xl">
                  {group.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {group.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full border border-[var(--border)]
                               bg-[var(--background)] text-[var(--foreground)]
                               hover:border-[var(--accent)] hover:text-[var(--accent)]
                               hover:shadow-md transition"
                  >
                    {skill}
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
