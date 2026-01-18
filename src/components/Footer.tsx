import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <circle cx="24" cy="24" r="22" fill="hsl(200, 50%, 25%)" />
                  <g transform="translate(12, 8)">
                    <ellipse cx="12" cy="20" rx="3" ry="8" fill="hsl(150, 60%, 40%)" />
                    <ellipse cx="6" cy="16" rx="3" ry="7" fill="hsl(160, 65%, 45%)" transform="rotate(-20, 6, 16)" />
                    <ellipse cx="18" cy="16" rx="3" ry="7" fill="hsl(160, 65%, 45%)" transform="rotate(20, 18, 16)" />
                    <ellipse cx="3" cy="12" rx="2.5" ry="6" fill="hsl(170, 70%, 50%)" transform="rotate(-35, 3, 12)" />
                    <ellipse cx="21" cy="12" rx="2.5" ry="6" fill="hsl(170, 70%, 50%)" transform="rotate(35, 21, 12)" />
                  </g>
                </svg>
              </div>
              <span className="text-lg font-bold">Leafclutch Technologies.</span>
            </Link>
            <p className="text-sm opacity-80 mb-6">
              We build intelligent software, AI, and automation solutions that drive measurable business growth for startups and enterprises worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-yellow mb-4 uppercase tracking-wide text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="#" className="opacity-80 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Careers</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-yellow mb-4 uppercase tracking-wide text-sm">Services</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="opacity-80 hover:opacity-100 transition-opacity">Software Services</Link></li>
              <li><Link to="#" className="opacity-80 hover:opacity-100 transition-opacity">AI & Automation</Link></li>
              <li><Link to="#" className="opacity-80 hover:opacity-100 transition-opacity">Web Development</Link></li>
              <li><Link to="#" className="opacity-80 hover:opacity-100 transition-opacity">DevOps Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-yellow mb-4 uppercase tracking-wide text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="opacity-80">info@leafclutch.dev</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 opacity-80 mt-1" />
                <span className="opacity-80">Bhairahawa, Rupandehi, Nepal.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">© 2026 Leafclutch Technologies. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="opacity-70 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="#" className="opacity-70 hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
