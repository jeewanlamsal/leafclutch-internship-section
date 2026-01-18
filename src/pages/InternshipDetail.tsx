import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Briefcase } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { internships } from "../data/internships";

const InternshipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const internship = internships.find((i) => i.id === id);

  if (!internship) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-2xl font-bold text-navy">Internship not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">
            ← Back to all internships
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all internships
          </Link>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy">
              {internship.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{internship.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Internship</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {internship.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-3">About the Role</h2>
              <p className="text-foreground leading-relaxed">
                {internship.fullDescription}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-3">Responsibilities</h2>
              <ul className="space-y-2">
                {internship.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-3">Requirements</h2>
              <ul className="space-y-2">
                {internship.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Link
                to="/enroll"
                className="inline-block px-8 py-3 bg-yellow hover:bg-yellow-hover text-navy font-semibold rounded-full transition-colors"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternshipDetail;
