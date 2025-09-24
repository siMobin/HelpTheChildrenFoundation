import Image from "next/image";
import TeamSection from "./TeamSection";

export default function Home() {
  return (
    <main>
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Meet Our <span className="text-primary">Team</span>
      </h2>

      {/* Founder Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Text Section */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Founder
            </h2>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Md. Arifur Rahman
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Md. Arifur Rahman, a businessman born in Kalkini Upazila,
              Madaripur District in the village of Tnathor in 1989, holds a BBA
              and MBA degree from South East University. His philanthropic
              journey began in 2009 during his university life. He prioritized
              the education and healthcare of street, homeless, and
              underprivileged children.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notable initiatives include{" "}
              <span className="font-semibold">Valo Kajer Hotel</span>,
              <span className="font-semibold"> Ayam Oha Old Age Home</span>, and
              <span className="font-semibold"> Ayam Gha Cancer Shelter</span>.
            </p>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/founder.jpg"
                alt="Founder"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Founder & Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founder Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Image Section */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/cofounder.jpg"
              alt="Co-Founder"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="font-bold text-lg">Co-Founder & CTO</p>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Co-Founder
            </h2>
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Jane Smith
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jane Smith, a technology leader with a Master’s in Software
              Engineering from MIT, has been driving innovation and creating
              scalable digital solutions since 2010. Her vision is to transform
              communities through future-ready technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              She leads initiatives in AI, education technology, and sustainable
              solutions for underserved populations.
            </p>
          </div>
        </div>
      </section>
      <TeamSection />
    </main>
  );
}
