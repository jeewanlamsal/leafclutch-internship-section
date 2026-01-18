import { Clock, Users, Code, Lightbulb } from "lucide-react";

const stats = [
  { icon: Clock, title: "3–6 Months", subtitle: "Duration" },
  { icon: Users, title: "1:5 Ratio", subtitle: "Mentorship" },
  { icon: Code, title: "Real Projects", subtitle: "Hands-on" },
  { icon: Lightbulb, title: "Skill Growth", subtitle: "Learning" },
];

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Hero Content */}
      <div className="bg-gradient-to-b from-secondary to-muted py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-semibold tracking-wide text-sm uppercase">
            Internship Program
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-navy">
            Kickstart Your Career
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Gain valuable industry experience and work on impactful projects.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-8 text-center ${
                index === 3 ? "bg-yellow/20 border-yellow/30" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-navy">{stat.title}</h3>
              <p className="text-muted-foreground text-sm">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
