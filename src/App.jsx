import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen text-base md:text-lg">
      {/* wrapper that shifts everything right */}
      <div className="ml-8 md:ml-20 pr-4">
        {/* Hero Section */}
        <section className="bg-white py-20 shadow-sm">
          <h1 className="text-4xl font-bold mb-2">Ravi Krishnan L</h1>
          <p className="text-xl text-gray-600">Design Leadership | Enterprise UX, Communication, Content Design</p>
        </section>

        {/* About Section */}
        <section className="py-16 max-w-4xl border-b border-gray-300">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg font-medium">Craft-led design practitioner and leader with 32+ years of experience in Design in/for Tech.</p>
        </section>

        {/* Experience Section */}
        <section className="py-16 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            {/* IBM */}
            <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
              <h3 className="text-xl font-bold mb-1">UX Architect</h3>
              <p className="text-sm text-gray-700 mb-2">IBM – December 2018 to Present</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li><strong>Gen AI Adoption Scaling:</strong> Conceived and implemented “KUDOS – Know, Use, Do, Own, Show” for 75 non‑tech BPO champions globally to fast‑track Gen AI adoption.</li>
                <li>Mentored 30+ Gen AI productivity‑assistant use cases from idea to execution and embedded Gen AI in customer journeys.</li>
                <li><strong>R2A Platform:</strong> Multi‑tenant reconciliation platform handling 30 M transactions; first customer onboarded in 6 weeks; now Gen AI‑enabled.</li>
              </ul>
            </div>
            {/* Wipro */}
            <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
              <h3 className="text-xl font-bold mb-1">Head of UX, Business Platforms</h3>
              <p className="text-sm text-gray-700 mb-2">Wipro – Aug 2013 – Dec 2018</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li><strong>BASE:</strong> Zero‑touch ops binder adopted by 30+ customers across 11 countries.</li>
                <li><strong>HARMONY:</strong> SOP‑codification cloud for 8 k users in 25 countries; powered benchmarking for 30 k users.</li>
                <li><strong>DELTAVERGE:</strong> Multi‑party distribution platform for regulated verticals (pharma, telecom, FMCG).</li>
              </ul>
            </div>
            {/* Suzlon */}
            <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
              <h3 className="text-xl font-bold mb-1">Head of Online Academy</h3>
              <p className="text-sm text-gray-700 mb-2">Suzlon Energy – Aug 2008 – Jul 2013</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Scaled digital self‑service learning to 9 k employees across operations & engineering.</li>
                <li><strong>Induction Portal:</strong> Global onboarding for 2 k hires in a year, cutting travel and seeding digital learning culture.</li>
                <li><strong>Troubleshooting Platform:</strong> Live knowledge base covering 800+ turbine‑commissioning errors with continuous updates.</li>
              </ul>
            </div>
            {/* Adayana / LearningByte */}
            <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
              <h3 className="text-xl font-bold mb-1">Chief of Design</h3>
              <p className="text-sm text-gray-700 mb-2">Adayana & LearningByte – 1995 – 2008</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Incubated a $0.5 M subscription e‑learning venture; launched 150‑hour soft‑skills curriculum for 1 000+ students.</li>
                <li>Set up factory‑model media delivery (1 000+ hrs) and onsite consulting for Fortune clients.</li>
              </ul>
            </div>
            {/* NIC */}
            <div className="p-6 bg-gray-100 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-1">Studio Head</h3>
              <p className="text-sm text-gray-700 mb-2">NIC – Jul 1993 – Dec 1995</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Produced self‑learning multimedia CD on design; digitised parliamentary proceedings for archival.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-white max-w-4xl border-b border-gray-300">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">Executive Management</h3>
              <p className="text-sm text-gray-700">IIM Lucknow – 2013</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">M.Des – Industrial Design</h3>
              <p className="text-sm text-gray-700">IDC, IIT Bombay – 1993</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">B.Arch</h3>
              <p className="text-sm text-gray-700">NIT Tiruchirapalli – 1990</p>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-16 max-w-4xl border-b border-gray-300">
          <h2 className="text-2xl font-semibold mb-6">Other Interests & Pursuits</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p><strong>Honorary Engagement –</strong> Member, Design Curriculum Audit & Review Committee 2024, IIT Bombay</p>
            <p><strong>External Examiner –</strong> IDC School of Design, IIT Bombay</p>
            <p><strong>Community Network –</strong> <a href="https://youtube.com/@idctalks4826" className="text-blue-600">Design Talks YouTube channel</a></p>
            <p><strong>Art –</strong> Urban Sketcher @lravikrishnan (Bengaluru chapter)</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6">Open to collaborations, mentorship, or just a friendly hello!</p>
          <div className="flex gap-6 flex-wrap text-sm">
            <a href="mailto:lravikrishnan@gmail.com" className="flex items-center gap-1 hover:text-blue-600"><Mail className="w-4 h-4"/>Email</a>
            <a href="https://github.com/lravikrishnan" className="flex items-center gap-1 hover:text-blue-600"><Github className="w-4 h-4"/>GitHub</a>
            <a href="https://www.linkedin.com/in/ravi-krishnan-l-05020119/" className="flex items-center gap-1 hover:text-blue-600"><Linkedin className="w-4 h-4"/>LinkedIn</a>
            <a href="https://instagram.com/lravikrishnan" className="flex items-center gap-1 hover:text-blue-600"><Instagram className="w-4 h-4"/>Instagram</a>
          </div>
          <div className="bg-red-500 text-white p-4">
            Tailwind is working now!
          </div>
        </section>
      </div>
    </div>
  );
}




