import { Check } from "lucide-react";

const benefits = [
  "Hands-on experience with real projects",
  "Mentorship from experienced professionals",
  "Flexible remote work options",
  "Certificate of completion",
  "Potential for full-time conversion",
  "Networking opportunities",
  "Skill development workshops",
  "Portfolio building projects",
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Internship Benefits
            </h2>
            <p className="mt-4 text-foreground text-lg">
              Our program provides valuable experience to set you up for success in your professional journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
