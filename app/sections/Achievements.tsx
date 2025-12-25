const achievements = [
  {
    icon: "🚀",
    title: "Team Leadership",
    description:
      "Led a team of 3 developers to successfully deliver business-critical features within tight deadlines, ensuring code quality and scalability.",
  },
  {
    icon: "📦",
    title: "Multi-Project Ownership",
    description:
      "Managed and delivered 4 independent projects over a 2-year period, balancing priorities, timelines, and stakeholder expectations.",
  },
  {
    icon: "🧠",
    title: "Mentorship & Growth",
    description:
      "Promoted to Senior Developer role, mentoring junior developers through code reviews, architecture guidance, and best practices.",
  },
];

export default function Achievements() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Achievements & Impact
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Key milestones and contributions that define my professional journey
          </p>
        </div>

        {/* Timeline-style cards */}
        <div className="space-y-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="relative pl-16"
            >
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 h-full w-px bg-[var(--border)]" />

              {/* Icon */}
              <div className="absolute left-0 top-2 w-12 h-12 rounded-xl 
                              flex items-center justify-center text-xl
                              bg-[var(--surface)] border border-[var(--border)]">
                {item.icon}
              </div>

              {/* Content */}
              <div className="rounded-2xl border border-[var(--border)] 
                              bg-[var(--surface)] p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
