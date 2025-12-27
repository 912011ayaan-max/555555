import { Bell, ArrowRight } from "lucide-react";

const Notices = () => {
  const notices = [
    {
      date: "Dec 20, 2024",
      title: "Winter Vacation Notice",
      description: "School will remain closed from Dec 25 to Jan 5 for winter break.",
      type: "Holiday",
    },
    {
      date: "Dec 15, 2024",
      title: "Parent-Teacher Meeting",
      description: "PTM scheduled for Classes 6-10 on December 18th, 2024.",
      type: "Meeting",
    },
    {
      date: "Dec 10, 2024",
      title: "Annual Sports Day",
      description: "Annual sports day celebrations on December 22nd. Parents are invited.",
      type: "Event",
    },
    {
      date: "Dec 5, 2024",
      title: "Admission Open 2024-25",
      description: "Admissions for new academic year are now open. Limited seats available.",
      type: "Admission",
    },
  ];

  const events = [
    { date: "Jan 26", title: "Republic Day Celebration", description: "Flag hoisting and cultural program" },
    { date: "Feb 15", title: "Science Exhibition", description: "Annual science project display" },
    { date: "Mar 20", title: "Annual Day Function", description: "Cultural performances and prize distribution" },
  ];

  return (
    <section id="notices" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Notices */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-school-gold/20 rounded-lg flex items-center justify-center">
                <Bell className="h-5 w-5 text-school-gold" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Notices & Events
              </h2>
            </div>

            <div className="space-y-4">
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-school-gold/30 hover:shadow-soft transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {notice.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{notice.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{notice.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-school-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events removed */}
        </div>
      </div>
    </section>
  );
};

export default Notices;
