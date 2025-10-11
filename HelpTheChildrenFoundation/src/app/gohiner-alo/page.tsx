"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function GohinerAloPage() {
  return (
    <main
      className="bg-background text-foreground max-w-dvw overflow-clip"
      id="gohiner-alo"
    >
      {/* Hero Section - Unique Design */}
      <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center text-center text-white bg-gradient-to-r from-accent to-primary overflow-hidden">
        <Image
          src="/images/gohiner-alo/gohiner-alo-bg.jpg"
          alt="Gohiner Alo Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-30"
        />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Gohiner Alo: Illuminating Minds, Enriching Souls
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl drop-shadow-md">
            Dedicated to fostering holistic growth through accessible Mass
            Education and profound Islamic Teachings, building a brighter future
            for all.
          </p>
        </div>
      </section>

      {/* Introduction to Gohiner Alo */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 ">
            Our Vision for a <span className="text-primary">Literate</span> and
            <span className="text-primary"> Virtuous</span> Community
          </h2>
          <p className="text-lg  leading-relaxed">
            Gohiner Alo stands as a beacon of knowledge, committed to uplifting
            communities through the power of education. We believe in a dual
            approach: providing essential secular knowledge for societal
            integration and profound Islamic wisdom for spiritual and moral
            development.
          </p>
        </div>
      </section>

      {/* Mass People Education Section - Unique Design */}
      <section className="py-20 px-4 bg-accent/20 ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="lg:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
              <Image
                src="/images/gohiner-alo/asset-2.jpg"
                alt="Mass Education"
                layout="fill"
                objectFit="cover"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div
            className="lg:order-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Empowering Through{" "}
              <span className="text-primary">Mass Education</span>
            </h2>
            <p className="text-xl  mb-8 leading-relaxed text-justify">
              Our Mass Education initiatives are designed to reach every corner
              of society, offering foundational literacy, numeracy, and critical
              life skills. We aim to break the cycle of illiteracy, providing
              individuals with the tools they need to thrive in a rapidly
              changing world. From adult literacy classes to vocational
              training, we open doors to new opportunities.
            </p>
            <ul className="list-disc list-inside text-lg space-y-2 mb-8">
              <li>Basic Literacy & Numeracy</li>
              <li>Vocational Skill Development</li>
              <li>Community Health & Hygiene</li>
              <li>Digital Literacy Workshops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Islamic Education Section - Unique Design */}
      <section className="py-20 px-4 bg-gradient-to-tl from-green-50 to-emerald-100 ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
              <Image
                src="/images/gohiner-alo/asset-2.jpg"
                alt="Mass Education"
                layout="fill"
                objectFit="cover"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div data-aos="fade-left " data-aos-duration="800">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-emerald-600">Arabic & Literacy&nbsp;</span>
              Education for&nbsp;<span className="text-emerald-600">Women</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-justify">
              In most mosques, Qur&apos;an and prayer education is readily
              available for men, but women often lack such opportunities. To
              address this, Daily Ten School has initiated the &quot;Gohiner
              Alo&quot; program, where a qualified female Hafeza teaches
              Qur&apos;anic Arabic and proper prayer recitation to
              underprivileged women.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-justify">
              Each batch consists of 40 mothers and sisters who receive
              structured lessons in Arabic reading, prayer recitation, and
              religious teachings. Additionally, to combat illiteracy, they are
              also taught basic Bangla literacy, enabling them to read and write
              with confidence.
            </p>

            <p className="text-xl mb-8 leading-relaxed text-justify">
              This initiative not only helps women strengthen their spiritual
              connection but also empowers them through education, ensuring they
              have access to the knowledge that is often out of their reach.t
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-primary ">
            Our Impact: Stories of Transformation
          </h2>
          <p className="text-lg mb-12 leading-relaxed">
            Through Gohiner Alo, countless lives have been touched. From
            children gaining access to foundational education to adults finding
            spiritual guidance and practical skills, our programs create lasting
            change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary ">
                Literacy Achieved
              </h3>
              <p className=" ">
                Over 500 adults have learned to read and write, opening new
                avenues for personal and professional growth.
              </p>
            </div>
            <div
              className="p-6 bg-gray-50  rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-semibold mb-3 text-emerald-600 ">
                Spiritual Growth
              </h3>
              <p className="">
                Hundreds of students have deepened their understanding of Islam
                and strengthened their faith through our dedicated programs.
              </p>
            </div>
            <div
              className="p-6 bg-gray-50  rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary ">
                Community Empowerment
              </h3>
              <p className="">
                Our initiatives have fostered stronger, more knowledgeable, and
                self-reliant communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 text-center bg-primary text-white">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Your contribution can help us expand our reach, provide more
            educational opportunities, and continue to ignite the inner light
            within individuals and communities.
          </p>
          <Link href="/donate">
            <Button variant="secondary" size="lg">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
