const skills = [
  "Ruby",
  "Ruby on Rails",
  "PostgreSQL",
  "Redis",
  "Sidekiq",
  "Docker",
  "AWS",
  "REST APIs",
  "Multi-Tenancy",
];

export default function Skills() {
  return (
    <section className="py-20 px-8 bg-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map(skill => (
          <div
            key={skill}
            className="p-4 border border-gray-700 rounded-lg text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
