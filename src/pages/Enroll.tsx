import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    position: "",
    otherPosition: "",
    linkedin: "",
    resume: null as File | null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const positions = [
    "Graphic Designer Internship",
    "SEO Specialist Internship",
    "Frontend Internship",
    "Backend Internship",
    "Full Stack Internship",
    "Content writer internship",
    "UI/UX Internship",
    "Other:",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      position: "",
      otherPosition: "",
      linkedin: "",
      resume: null,
    });
  };

  const handleSwitchAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "https://accounts.google.com/AccountChooser";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedPosition = formData.position === "Other:" ? formData.otherPosition : formData.position;
    
    const recipient = "careers@leafclutchtech.com.np";
    const subject = encodeURIComponent(`Application for ${selectedPosition}`);
    
    const emailBody = encodeURIComponent(
`Dear Hiring Team,

I am writing to express my interest in the ${selectedPosition} at Leaf Clutch Tech. Below are my application details:

--- INTERNSHIP APPLICATION REPORT ---
Full Name: ${formData.name}
Email Address: ${formData.email}
WhatsApp: ${formData.whatsapp}
Interested Position: ${selectedPosition}
LinkedIn Profile: ${formData.linkedin || "Not provided"}
Attached Resume: ${formData.resume ? formData.resume.name : "Please find attached"}

I have filled out the application form and look forward to the possibility of discussing how my skills can contribute to your team.

Best regards,
${formData.name}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${emailBody}`;
  };

  return (
    <div className="min-h-screen bg-[#f0ebf8]">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-[640px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to internships
          </Link>

          {/* Header Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-3">
            <div className="h-3 bg-teal" />
            <div className="p-6">
              <h1 className="text-[32px] font-normal text-[#202124] mb-4">
                Internship Request Form
              </h1>
              <div className="mb-4">
                <p className="text-[14px] font-medium text-[#202124] mb-2">
                  Internship Benefits
                </p>
                <ul className="text-[14px] text-[#5f6368] space-y-1">
                  <li>• Hands-on experience with real projects</li>
                  <li>• Mentorship from experienced professionals</li>
                  <li>• Flexible remote work options</li>
                  <li>• Certificate of completion</li>
                </ul>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#f8f9fa] rounded-lg">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-medium">
                  J
                </div>
                <div className="flex-1">
                  <span className="text-[14px] text-[#202124]">jeewanlamsal40@gmail.com</span>
                  <button 
                    onClick={handleSwitchAccount}
                    className="ml-2 text-[14px] text-[#1a73e8] hover:underline"
                  >
                    Switch accounts
                  </button>
                  <p className="text-[12px] text-[#5f6368]">
                    The name, email and photo will be recorded when you submit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <label className="block text-[14px] text-[#202124] mb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="w-full border-b border-[#dadce0] py-2 text-[14px] focus:border-[#1a73e8] focus:border-b-2 outline-none transition-all"
                placeholder="Your answer"
              />
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <label className="block text-[14px] text-[#202124] mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="w-full border-b border-[#dadce0] py-2 text-[14px] focus:border-[#1a73e8] focus:border-b-2 outline-none transition-all"
                placeholder="Your answer"
              />
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <label className="block text-[14px] text-[#202124] mb-2">
                WhatsApp contact<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                required
                className="w-full border-b border-[#dadce0] py-2 text-[14px] focus:border-[#1a73e8] focus:border-b-2 outline-none transition-all"
                placeholder="Your answer"
              />
            </div>

            {/* Position */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <label className="block text-[14px] text-[#202124] mb-4">
                Interested Position<span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {positions.map((position) => (
                  <label key={position} className="flex items-center gap-3 cursor-pointer">
                    <div 
                      onClick={() => handleInputChange("position", position)}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        formData.position === position ? 'border-[#1a73e8]' : 'border-[#5f6368]'
                      }`}
                    >
                      {formData.position === position && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1a73e8]" />
                      )}
                    </div>
                    <span className="text-[14px] text-[#202124]">{position}</span>
                    {position === "Other:" && formData.position === "Other:" && (
                      <input
                        type="text"
                        value={formData.otherPosition}
                        onChange={(e) => handleInputChange("otherPosition", e.target.value)}
                        className="flex-1 border-b border-[#dadce0] py-1 text-[14px] focus:border-[#1a73e8] outline-none"
                        placeholder="Specify position"
                      />
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <label className="block text-[14px] text-[#202124] mb-2">
                LinkedIn
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleInputChange("linkedin", e.target.value)}
                className="w-full border-b border-[#dadce0] py-2 text-[14px] focus:border-[#1a73e8] focus:border-b-2 outline-none transition-all"
                placeholder="Your answer"
              />
            </div>

            {/* Resume Upload */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <label className="block text-[14px] text-[#202124] mb-2">
                Resume
              </label>
              <p className="text-[12px] text-[#5f6368] mb-3">
                Upload 1 supported file: PDF. Max 10 MB.
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 border border-[#dadce0] rounded text-[14px] font-medium text-[#1a73e8] hover:bg-[#f8f9fa] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Add File
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              {formData.resume && (
                <p className="mt-2 text-[14px] text-[#5f6368]">
                  📎 {formData.resume.name}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="px-6 py-2 bg-[#1a73e8] text-white text-[14px] font-medium rounded hover:bg-[#1557b0] transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="text-[14px] text-[#1a73e8] hover:underline"
              >
                Clear form
              </button>
            </div>
          </form>

          {/* Footer Branded */}
          <div className="mt-6 text-center">
            <p className="text-[12px] text-[#5f6368] mb-2">
              Never submit passwords through the Forms.
            </p>
            <div className="text-[14px] text-[#5f6368]">
              <span className="text-teal font-semibold">Leafclutch</span>
              <span className="text-navy font-semibold">Tech</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enroll;
