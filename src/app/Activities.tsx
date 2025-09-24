"use client";
import React from "react";

type ActivitiesCardProps = {
  title: string;
  description: string;
  delay?: number;
};

const ActivitiesCard: React.FC<ActivitiesCardProps> = ({
  title,
  description,
  delay,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={delay}
      className="relative overflow-clip bg-white group flex-col justify-start text-left p-4 rounded-lg shadow-lg z-10"
    >
      {/* Hover background effect */}
      <div className="absolute bg-primary  w-0 border-l-2 border border-primary h-full -z-10 left-0 top-0 duration-500 group-hover:w-full"></div>

      {/* Card content */}
      <div className="text-left p-4 border border-dashed rounded-lg border-gray-300 hover:border-gray-500 hover:text-white duration-200 h-full">
        <h3 className="font-sans text-xl md:text-2xl uppercase mb-2">
          {title}
        </h3>
        <p className="whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

const Activities: React.FC = () => {
  const activitiesData = [
    {
      title: "NCTB Based Education",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      delay: 100,
    },
    {
      title: "Distribution of Educational Materials",
      description:
        "We distribute educational materials to students and teachers to enhance their learning experience.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      delay: 200,
    },
    {
      title: "Morning Assembly",
      description:
        "Morning Assembly is a religious gathering where students and teachers gather to pray and learn about the Holy Quran.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      delay: 300,
    },
  ];

  return (
    <section className="relative activities-areas bg-white z-10 py-[80px]">
      <div className="container w-5/6 2xl:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activitiesData.map((item, index) => (
          <ActivitiesCard
            key={index}
            title={item.title}
            description={item.description}
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Activities;
