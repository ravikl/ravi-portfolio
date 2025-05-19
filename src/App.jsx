import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen text-base md:text-lg">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 shadow-sm">
        <h1 className="text-4xl font-bold mb-2">Ravi Krishnan L</h1>
        <p className="text-xl text-gray-600">Design Leadership | Enterprise UX, Communication, Content Design</p>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-4xl border-b border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg font-medium">Craft-led design practitioner and leader with 32+ years of experience in Design in/for Tech.</p>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-8">
          <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
            <h3 className="text-xl font-bold mb-1">UX Architect</h3>
            <p className="text-sm text-gray-700 mb-2">IBM – December 2018 to Present</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li><strong>Gen AI Adoption Scaling:</strong> Conceived and implemented “KUDOS – Know, Use, Do, Own, Show” for 75 non-tech BPO champions globally to fast-track Gen AI adoption.</li>
              <li>Mentored 30+ Gen AI productivity assistant use cases from idea to execution to enhance customer experience.</li>
              <li><strong>R2A Platform:</strong> Envisioned and launched a multi-tenant platform for financial reconciliation and reporting, managing 30M transactions.</li>
              <li>Onboarded first customer in 6 weeks, established UX practice and standards using IBM Carbon Design, released Gen AI-enabled version.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
            <h3 className="text-xl font-bold mb-1">Head of UX, Business Platforms</h3>
            <p className="text-sm text-gray-700 mb-2">Wipro – August 2013 to December 2018</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li><strong>BASE:</strong> Zero-touch Ops platform integrated with client IT stacks; 30+ customers in 11 countries.</li>
              <li><strong>HARMONY:</strong> SOP-level codification platform used by 8,000 users across 25 countries, enabling benchmarking by 30k+ users.</li>
              <li><strong>DELTAVERGE:</strong> Multi-party distribution platform designed for regulated sectors like pharma, telecom, FMCC.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
            <h3 className="text-xl font-bold mb-1">Head of Online Academy</h3>
            <p className="text-sm text-gray-700 mb-2">Suzlon Energy – August 2008 to July 2013</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Capability building as a digital self-service for 9K employees</li>
              <li>Created learning journeys and toolkits for on-demand skilling across operations, engineering, and support functions</li>
              <li>Established a virtual academy framework to enable distributed teams to access skill-building content</li>
              <li><strong>Induction Portal:</strong> Delivered standardized induction for 2000+ employees globally in one year, fostering digital learning culture and reducing travel costs</li>
              <li><strong>Mission-critical Technical Knowledge Online:</strong> Launched a Troubleshooting platform for remote engineers, addressing 800+ turbine commissioning errors and developed a global error update mechanism</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-2xl shadow border-b border-gray-300">
            <h3 className="text-xl font-bold mb-1">Chief of Design</h3>
            <p className="text-sm text-gray-700 mb-2">Adayana & LearningByte – December 1995 to August 2008</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Incubated a $0.5M subscription-based online education venture in India for Colleges/Universities. Built a 150-hour online curriculum on soft skills, successfully launched at Allahabad University with 1000+ students certified. Responsible for product design, development, marketing, and sales.</li>
              <li>Headed on-site consulting arm of a multidisciplinary team to co-create learning solutions for clients</li>
              <li>Managed outsourced creative services in India and evolved techniques for large-scale delivery in learning industry</li>
              <li>Implemented a factory model yielding profitable delivery of 1000+ hours of media content</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-1">Studio Head</h3>
            <p className="text-sm text-gray-700 mb-2">National Informatics Centre (NIC) – July 1993 to December 1995</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Led a team to design a self-learning multimedia CD on design, considered for commercial sale</li>
              <li>Digitized parliamentary proceedings for archival and retrieval through CD technology</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white max-w-4xl border-b border-gray-300">
        <div className="">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">Executive Management</h3>
              <p className="text-sm text-gray-700">Indian Institute of Management, Lucknow – 2013</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Master of Design – Industrial Design</h3>
              <p className="text-sm text-gray-700">IDC, IIT Bombay – 1993</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Bachelor of Architecture</h3>
              <p className="text-sm text-gray-700">National Institute of Technology, Tiruchirapalli – 1990</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Interests and Pursuits Section */}
      <section className="py-16 px-4 max-w-4xl border-b border-gray-300">
        <h2 className="text-2xl font-semibold mb-6">Other Interests and Pursuits</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li><strong>Honorary Engagement:</strong> Member of the Design Curriculum Audit & Review Committee 2024, IIT Bombay</li>
          <li><strong>External Examiner:</strong> IDC School of Design, IIT Bombay</li>
          <li><strong>Community Network:</strong> Design Talks, YouTube Channel – Featuring talks from design practitioners (@idctalks4826)</li>
          <li><strong>Art:</strong> Urban Sketcher, Member of Urban Sketchers Bengaluru (@lravikrishnan)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className="flex gap-6">
          <a href="mailto:lravikrishnan@gmail.com" className="hover:text-blue-500">Email</a>
          <a href="https://github.com/yourusername" className="hover:text-blue-500">Github</a>
          <a href="https://www.linkedin.com/in/ravi-krishnan-l-05020119/" className="hover:text-blue-500">LinkedIn</a>
          <a href="https://instagram.com/yourusername" className="hover:text-blue-500">Instagram</a>
        </div>
      </section>
    </div>
  );
}
