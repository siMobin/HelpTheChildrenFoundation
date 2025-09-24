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
    <Card
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={delay}
      className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-500"
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mb-6">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover shadow-md border-4 border-white group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Name */}
        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Position */}
        <p className="mt-1 text-base text-gray-600">{position}</p>

        {/* Divider */}
        <div className="w-12 h-1 bg-primary/40 rounded-full my-4 group-hover:bg-primary transition-colors duration-300"></div>

        {/* Education */}
        <p className="text-sm text-gray-500 leading-relaxed">{education}</p>
      </CardContent>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent"></div>
    </Card>
  );
};

const TeamSection: React.FC = () => {
  const teamData: TeamMember[] = [
    {
      name: "John Doe",
      position: "Software Engineer",
      education: "BSc in Computer Science, MIT",
      image: "/team/john.jpg",
      delay: 100,
    },
    {
      name: "Jane Smith",
      position: "Project Manager",
      education: "MBA in Project Management, Harvard",
      image: "/team/jane.jpg",
      delay: 200,
    },
    {
      name: "Ali Khan",
      position: "UI/UX Designer",
      education: "BA in Graphic Design, London Arts",
      image: "/team/ali.jpg",
      delay: 300,
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      education: "BSc in Computer Science, MIT",
      image: "/team/john.jpg",
      delay: 100,
    },
    {
      name: "Jane Smith",
      position: "Project Manager",
      education: "MBA in Project Management, Harvard",
      image: "/team/jane.jpg",
      delay: 200,
    },
    {
      name: "Ali Khan",
      position: "UI/UX Designer",
      education: "BA in Graphic Design, London Arts",
      image: "/team/ali.jpg",
      delay: 300,
    },
  ];

  return (
    <section className="relative team-section bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container w-5/6 2xl:w-2/3 mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Meet Our Other <span className="text-primary">Team</span> Members
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
