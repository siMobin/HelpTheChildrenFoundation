import Image from "next/image";
import TeamSection from "./TeamSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* Section Title */}
      {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Meet Our <span className="text-primary">Team</span>
      </h2> */}

      {/* <section>
        <div className="bg-[url('/images/school/education-bg.svg')] bg-cover bg-no-repeat relative overflow-clip">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 text-white flex flex-col justify-center items-center">
              <div className="border-l-4 border-primary pl-4">
                <h1 className="text-6xl">
                  MD. Arifur <br /> Rahman
                </h1>
                <span className="text-xl italic">
                  Founder & Chairman <br /> Help Children Foundation
                </span>
              </div>
            </div>
            <img
              src="/images/team/arifur-rahman.webp"
              alt="Founder"
              className="h-[80dvh] w-auto px-4 pt-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <img
            src="/images/team/torn-paper.svg"
            alt=""
            className="absolute top-120 left-0"
          />
        </div>
      </section>

 
      <section
        className="bg-no-repeat [background-size:300%] bg-bottom pb-4"
        style={{ backgroundImage: "url('/images/team/torn-paper.svg')" }}
      >
        <div className="max-w-6xl mx-auto ">
       
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Founder
            </h2>

            <p className="text-lg text-justify mb-6 leading-relaxed">
              Mr. Arifur Rahman, a businessman born in Kalkini Upazila,
              Madaripur district, in the village of Tumchar in 1989, holds a BBA
              and MBA degree from South East University. His philanthropic
              journey began in 2009 during his university life when he started
              working for underprivileged and neglected individuals. Assisted by
              his younger brothers and friends, he prioritized the education and
              healthcare of street, homeless, and underprivileged children.
              Starting with informal roadside teaching, he established the first
              campus in 2015, providing formal education to underprivileged
              children. Notable initiatives include{" "}
              <strong className="italic">&apos;Valo Kajer Hotel&apos;</strong>{" "}
              for the rootless and destitute people,{" "}
              <strong className="italic">
                &apos;Apan Ghar Old Age Home&apos;
              </strong>{" "}
              for homeless parents and orphans &{" "}
              <strong className="italic">
                &apos;Apan Ghar Cancer Shelter Home&apos;
              </strong>{" "}
              for impecunious cancer patient.
            </p>
          </div>
        </div>
      </section> */}

      {/* Founder Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Founder
            </h2>
            {/* <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Shenoor Rhaman Asif
            </h3> */}
            <p className="text-lg text-justify mb-6 leading-relaxed">
              Mr. Arifur Rahman, a businessman born in Kalkini Upazila,
              Madaripur district, in the village of Tumchar in 1989, holds a BBA
              and MBA degree from South East University. His philanthropic
              journey began in 2009 during his university life when he started
              working for underprivileged and neglected individuals. Assisted by
              his younger brothers and friends, he prioritized the education and
              healthcare of street, homeless, and underprivileged children.
              Starting with informal roadside teaching, he established the first
              campus in 2015, providing formal education to underprivileged
              children. Notable initiatives include{" "}
              <strong className="italic">&apos;Valo Kajer Hotel&apos;</strong>{" "}
              for the rootless and destitute people,{" "}
              <strong className="italic">
                &apos;Apan Ghar Old Age Home&apos;
              </strong>{" "}
              for homeless parents and orphans &{" "}
              <strong className="italic">
                &apos;Apan Ghar Cancer Shelter Home&apos;
              </strong>{" "}
              for impecunious cancer patient.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/team/arifur-rahman.webp"
              alt="Founder"
              className="h-auto w-full pl-4 pt-4"
            />
            <Button className="absolute bottom-6 left-6 ">
              <p className="font-bold text-lg">MD. Arifur Rahman</p>
            </Button>
          </div>
        </div>
      </section>

      {/* Co-Founder Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Image Section */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/team/asif.png"
              alt="Founder"
              className="h-auto w-full pl-4 pt-4"
            />
            <Button className="absolute bottom-6 left-6 ">
              <p className="font-bold text-lg">Shehanoor Rahman Asif</p>
            </Button>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Co-Founder
            </h2>
            {/* <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Shenoor Rhaman Asif
            </h3> */}
            <p className="text-lg  mb-6 leading-relaxed">
              Jane Smith, a technology leader with a Master’s in Software
              Engineering from MIT, has been driving innovation and creating
              scalable digital solutions since 2010. Her vision is to transform
              communities through future-ready technology.
            </p>
            <p className="text-lg  leading-relaxed">
              She leads initiatives in AI, education technology, and sustainable
              solutions for underserved populations.
            </p>
          </div>
        </div>
      </section>
      {/* Other members */}
      <TeamSection />
    </main>
  );
}
