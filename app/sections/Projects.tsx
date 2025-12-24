export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">
            Service Booking System
          </h3>
          <p className="mt-2 text-gray-400">
            Slot-based booking platform built with Rails, Devise,
            ActiveAdmin, role-based permissions, and Docker.
          </p>
        </div>

        <div className="p-6 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">
            Device Management System
          </h3>
          <p className="mt-2 text-gray-400">
            Real-time device monitoring system using Rails, MQTT,
            background jobs, and multi-tenant architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
