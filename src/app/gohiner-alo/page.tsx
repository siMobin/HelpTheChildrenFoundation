"use client";

import CurvedLoop from "@/components/CurvedLoop";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const swingImages = [
  "/images/gohiner-alo/Swing/🔭GcamHero_20240525_162957_⌛ IPHONE 14 PRO MAX BY GCAM HERO (AUTO) LMC8.4 R13.jpg",
  "/images/gohiner-alo/Swing/🔭GcamHero_20240525_163008_⌛ IPHONE 14 PRO MAX BY GCAM HERO (AUTO) LMC8.4 R13.jpg",
  "/images/gohiner-alo/Swing/🔭GcamHero_20240525_163042_⌛ IPHONE 14 PRO MAX BY GCAM HERO (AUTO) LMC8.4 R13.jpg",
  "/images/gohiner-alo/Swing/🔭GcamHero_20240525_163142_⌛ IPHONE 14 PRO MAX BY GCAM HERO (AUTO) LMC8.4 R13.jpg",
  "/images/gohiner-alo/Swing/🔭GcamHero_20240525_163152_⌛ IPHONE 14 PRO MAX BY GCAM HERO (AUTO) LMC8.4 R13.jpg",
  "/images/gohiner-alo/Swing/🔭GcamHero_20240525_163237_⌛ IPHONE 14 PRO MAX BY GCAM HERO (AUTO) LMC8.4 R13.jpg",
];

const galleryImages = [
  "/images/gohiner-alo/New folder/photo_2024-07-24_16-23-47.jpg",
  "/images/gohiner-alo/New folder/photo_2024-07-24_16-25-00.jpg",
  "/images/gohiner-alo/New folder/photo_2024-07-24_16-27-03.jpg",
  "/images/gohiner-alo/New folder/photo_2024-07-24_16-27-20.jpg",
  "/images/gohiner-alo/New folder/photo_2024-07-24_16-28-02.jpg",
  "/images/gohiner-alo/New folder/photo_2024-07-24_16-28-39.jpg",
];

export default function GohinerAloPage() {
  return (
    <main className="bg-background text-foreground" id="gohiner-alo">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center text-center text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0)),url('/images/gohiner-alo/gohiner-alo-bg.jpg')] bg-cover bg-no-repeat bg-top">
        {/* <img
          src="https://images.pexels.com/photos/1633417/pexels-photo-1633417.jpeg"
          alt="Heart Health"
          className="absolute z-0 opacity-50 object-cover w-full h-full object-bottom bg-primary"
        /> */}
        <div className="flex flex-col items-center gap-40 h-full py-4">
          <CurvedLoop
            marqueeText="✦ Gohiner Alo: Igniting The Inner Light ✦"
            speed={1}
            curveAmount={300}
            direction="left"
            interactive={true}
            className="mt-18"
          />
          <p className="text-2xl">
            Empowering individuals through vocational training, fostering
            self-reliance, and building brighter futures for entire communities.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-justify text-gray-700 dark:text-gray-300 mb-6">
              &quot;Gohiner Alo&quot; is a beacon of hope, dedicated to
              unlocking the potential within each individual. We provide women
              and young adults with practical skills, such as sewing and crafts,
              to help them achieve financial independence and become leaders in
              their communities.
            </p>
            <Link href="/donate">
              <Button size="lg">Join Our Cause</Button>
            </Link>
          </div>
          <div
            className="relative min-h-[400px] rounded-lg overflow-hidden shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <Image
              src="/images/gohiner-alo/asset-1.jpg"
              alt="A woman smiling while working on a sewing machine"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            A Glimpse Into Gohiner Alo
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore the moments of learning, creativity, and empowerment that
            define our vocational training program.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {swingImages.map((src, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Image
                  src={src}
                  alt={`Sewing training session ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
          <div
            className="relative h-80 max-w-md rounded-lg overflow-hidden shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <Image
              src={galleryImages[0]}
              alt="A participant of the Gohiner Alo project"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Success Story: Rina&apos;s Journey
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Rina joined Gohiner Alo with a dream of supporting her family.
              Through our sewing program, she not only mastered a new skill but
              also discovered her entrepreneurial spirit. Today, Rina runs her
              own small tailoring business, inspiring other women in her
              community to pursue their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 text-center bg-primary text-white">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Be a Part of the Change</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Your support can help us provide more individuals with the training
            and resources they need to build a self-reliant future. Together, we
            can ignite the inner light for countless others.
          </p>
          <Link href="/sponsor-a-child">
            <Button variant="secondary" size="lg">
              Sponsor a Participant
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
