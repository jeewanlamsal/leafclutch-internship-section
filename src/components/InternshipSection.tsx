import { internships } from "../data/internships";
import InternshipCard from "./InternshipCard";

const InternshipsSection = () => {
  return (
    <section className="py-12 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-10">
          Available Internships
        </h2>
        <div className="space-y-6">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
