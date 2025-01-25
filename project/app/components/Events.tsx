import { Calendar } from "lucide-react"

export default function EventsSection() {
  const events = [
    {
      icon: <Calendar className="w-8 h-8 text-amber-400 mb-4" />,
      title: "Technical Workshop",
      description: "Introduction to Machine Learning with Python",
      date: "March 25, 2024 • 3:00 PM",
    },
    {
      icon: <Calendar className="w-8 h-8 text-amber-400 mb-4" />,
      title: "Guest Lecture",
      description: "Cybersecurity in the Age of AI",
      date: "April 2, 2024 • 4:30 PM",
    },
    {
      icon: <Calendar className="w-8 h-8 text-amber-400 mb-4" />,
      title: "Hackathon",
      description: "24-Hour Coding Challenge",
      date: "April 15-16, 2024",
    },
  ]

  return (
    <section id="events" className="py-16">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20"
              >
                {event.icon}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <p className="text-sm text-amber-400">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}