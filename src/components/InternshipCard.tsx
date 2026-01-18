import { Link } from "react-router-dom";
import type { Internship } from "../data/internships";

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard = ({ internship }: InternshipCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-navy">{internship.title}</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            {internship.duration} •{" "}
            <span className="text-primary hover:underline cursor-pointer">
              {internship.type}
            </span>
          </p>
          <p className="mt-4 text-foreground">{internship.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {internship.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-3">
          <Link
            to={`/internship/${internship.id}`}
            className="px-5 py-2.5 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-center"
          >
            View More
          </Link>
          <Link
            to="/enroll"
            className="px-5 py-2.5 bg-yellow hover:bg-yellow-hover text-navy font-semibold rounded-full transition-colors text-center"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
