import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <header className="w-full bg-background py-4 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
           <img src={logo} alt="Company Logo" className="rounded-full"/>
          </div>
          <span className="text-xl font-bold text-navy">Leafclutch Technologies.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="#" className="text-foreground hover:text-primary transition-colors">About Us</Link>
          <Link to="#" className="text-foreground hover:text-primary transition-colors">Our Projects</Link>
          <Link to="#" className="text-foreground hover:text-primary transition-colors">Our Services</Link>
          <Link to="#" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
          <div className="flex items-center gap-1 text-foreground hover:text-primary transition-colors cursor-pointer">
            <span>Careers</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        {/* CTA Button */}
        <Link
          to="#"
          className="bg-yellow hover:bg-yellow-hover text-navy font-semibold px-6 py-2.5 rounded-full transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
