"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitch, Twitter } from "lucide-react";

type TeamMember = {
  name: string;
  position: string;
  education: string;
  image: string;
};

const TeamCard: React.FC<TeamMember & { i: number }> = ({
  name,
  position,
  education,
  image,
  i,
}) => {
  return (
    <Card
      className="group relative h-full w-full !overflow-clip rounded-[12rem] bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-shadow duration-500"
      id="team"
    >
      <CardContent className="flex flex-col justify-between items-center text-center relative overflow-clip">
        {/* Profile Image */}
        <div className="relative w-full rounded-full aspect-square mb-6 overflow-clip shadow-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay={i * 300}
          />

          <div className="absolute -bottom-32 group-hover:bottom-75 left-0 h-18 bg-accent opacity-90 rounded-e-8xl w-full rotate-15 scale-150 blur-2xl"></div>
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
        <div className="flex gap-4 justify-center items-center py-2">
          <Link href="#" className="icon">
            <Facebook size={20} className="text-primary" />
          </Link>
          <Link href="#" className="icon">
            <Twitter size={20} className="text-primary" />
          </Link>
          <Link href="#" className="icon">
            <Linkedin size={20} className="text-primary" />
          </Link>
        </div>
      </CardContent>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/20 via-secondary/20 to-primary/20 overflow-clip"></div>
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
    },
    {
      name: "Md. Faruk",
      position: "Accounts Monitoring",
      education: "MBA (Accounting), Govt. Titumir College",
      image: "/images/team/faruk.png",
    },
    {
      name: "Md. Sakib Hasan",
      position: "Education Development",
      education: "MBA (Finance & Banking), Govt. Titumir College",
      image: "/images/team/sakib-asan.png",
    },
    {
      name: "Md. Jakir Hossain",
      position: "Sports & Cultural Program",
      education: "BBA (Mangement), National University",
      image: "/images/team/jakir-hossain.png",
    },
    {
      name: "MAHAMODUL HASAN ANIK",
      position: "Senior Monitoring Officer",
      education: "Master’s of Business Administration, National University",
      image: "/images/team/anik.png",
    },
  ];

  return (
    <section className="relative team-section  py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Meet Our <span className="text-primary">Team</span> Members
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} i={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
