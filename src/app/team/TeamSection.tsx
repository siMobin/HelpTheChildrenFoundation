"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type TeamMember = {
  name: string;
  position: string;
  education: string;
  image: string;
  delay?: number;
};

const TeamCard: React.FC<TeamMember> = ({
  name,
  position,
  education,
  image,
  delay,
}) => {
  return (
    <Card className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-500">
      <CardContent className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="relative w-full aspect-square mb-6 overflow-clip">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover shadow-md border-4 border-white group-hover:scale-105 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={delay}
          />

          <div className="absolute -bottom-8 left-0 h-18 bg-accent rounded-e-8xl w-full rotate-15 scale-150"></div>
        </div>

        {/* Name */}
        <h3 className="text-2xl font-semibold  group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Divider */}
        <div className="w-12 h-1 bg-primary/40 rounded-full my-2 group-hover:bg-primary transition-colors duration-300"></div>
        {/* Position */}
        <p className="mt-1 text-base ">{position}</p>

        {/* Education */}
        {/* <p className="text-sm  leading-relaxed">{education}</p> */}
      </CardContent>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent"></div>
    </Card>
  );
};

const TeamSection: React.FC = () => {
  const teamData: TeamMember[] = [
    {
      name: "Md. Zakir Hossain Hawlader",
      position: "Sports & Cultural Program",
      education: "BBA (Management), National University",
      image: "/images/team/zakir-hossain.png",
      delay: 100,
    },
    {
      name: "Md. Faruk",
      position: "Accounts Monitoring",
      education: "MBA (Accounting), Govt. Titumir College",
      image: "/images/team/faruk.png",
      delay: 200,
    },
    {
      name: "Md. Sakib Hasan",
      position: "Education Development",
      education: "MBA (Finance & Banking), Govt. Titumir College",
      image: "/images/team/sakib-asan.png",
      delay: 300,
    },
    {
      name: "Md. Jakir Hossain",
      position: "Sports & Cultural Program",
      education: "BBA (Mangement), National University",
      image: "/images/team/jakir-hossain.png",
      delay: 100,
    },
    {
      name: "MAHAMODUL HASAN ANIK",
      position: "Senior Monitoring Officer",
      education: "Master’s of Business Administration, National University",
      image: "/images/team/anik.png",
      delay: 200,
    },
  ];

  return (
    <section className="relative team-section bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container w-5/6 2xl:w-2/3 mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Meet Our <span className="text-primary">Team</span> Members
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
