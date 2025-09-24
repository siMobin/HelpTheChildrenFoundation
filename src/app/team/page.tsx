import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TeamSection from "./TeamSection";

export default function Home() {
  return (
    <main>
      <Header />
      <TeamSection />

      {/* Founder & Co-Founder Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Visionary Leaders
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Meet the people who laid the foundation of our journey and continue
            to inspire us with their leadership and vision.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Founder */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="h-72 relative">
                <Image
                  src="/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
                <p className="text-indigo-600 font-medium">Founder & CEO</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  BSc in Computer Science, Harvard University. Passionate about
                  building impactful solutions that empower communities
                  worldwide.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link href="https://linkedin.com">
                    <Button variant="outline" className="rounded-full">
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="mailto:founder@example.com">
                    <Button className="rounded-full">Contact</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="h-72 relative">
                <Image
                  src="/cofounder.jpg"
                  alt="Co-Founder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-2xl font-bold text-gray-900">Jane Smith</h3>
                <p className="text-purple-600 font-medium">Co-Founder & CTO</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  MSc in Software Engineering, MIT. Driving innovation with a
                  focus on technology, scalability, and future-ready solutions.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link href="https://linkedin.com">
                    <Button variant="outline" className="rounded-full">
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="mailto:cofounder@example.com">
                    <Button className="rounded-full">Contact</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
